  authService.$inject = ['$cookies', '$location', 'Idle', 'deviceUtils', 'CONSTANTS', '$http']

  /* @ngInject */
  export function authService($cookies, $location, deviceUtils, CONSTANTS, $http) {
    var service = {}

    const localStorage = window.getLocalStorage()
    var _isAuthenticated = null
    var session = null
    var isAClient = null
    var isAClientBuffer = false
    service._canAccessResponse = null

    service.sessionStorage = window.sessionStorage
    // service.partyService = partyService

    function getSession() {
      const cookie = $cookies.getObject('session')

      if (session !== null) {
        return session
      }

      if (cookie && cookie.sessionID) {
        session = cookie
      } else {
        const str = localStorage.session

        if (str && str.indexOf('sessionID') !== -1) {
          try {
            session = JSON.parse(str)
          } catch (e) {
            console.error('Failed to parse session from Local Storage in authService::getSession()')
          }
        }
      }

      return session
    }

    service.isAuthenticated = function() {
      if (_isAuthenticated !== null) {
        return _isAuthenticated
      }

      _isAuthenticated = getSession() !== null

      return _isAuthenticated
    }

    /* cookie values only used in GA tag manager only */
    service._setGACookieValues = function(ss) {
      if (ss.loggedInAs) {
        $cookies.put('userID', ss.loggedInAs)
      }

      if (ss.dob) {
        let range = getRange(ss.dob)

        $cookies.put('ageRange', range)
      }

      if (ss.roles && angular.isArray(ss.roles)) {
        let roles = translateRoles(ss.roles)

        $cookies.put('userRoles', roles)
      }

      if (ss.distributionChannel) {
        $cookies.put('distributionChannel', ss.distributionChannel)
      }
    }

    function initHoPermissions() {
      if (service.isHomeOfficeUser()) {
        service.canAccess().then((data) => {
          service._canAccessResponse = data
        })
      }
    }

    service.getLogin = function() {
      var parts
      var ss = getSession()

      if (!ss) {
        return ''
      }

      this._setGACookieValues(ss) // set google analytics cookie values
      initHoPermissions()

      if (ss.name) {
        parts = ss.name.split(' ')

        return parts[0]
      } else if (ss.loggedInAs) {
        return ss.loggedInAs
      }
      return ''
    }

    function calculateAge(birthday) {
      var ageDifMs = Date.now() - birthday.getTime()
      var ageDate = new Date(ageDifMs)

      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    function getRange(dob) {
      var range = ''
      var age = calculateAge(new Date(dob))

      if (age >= 0 && age <= 20) {
        range = '0-20'
      } else if (age <= 30) {
        range = '21-30'
      } else if (age <= 40) {
        range = '31-40'
      } else if (age <= 50) {
        range = '41-50'
      } else if (age <= 60) {
        range = '51-60'
      } else if (age <= 70) {
        range = '61-70'
      } else if (age <= 80) {
        range = '71-80'
      } else if (age <= 90) {
        range = '81-90'
      } else if (age <= 100) {
        range = '91-100'
      } else if (age >= 101) {
        range = '101+'
      } else {
        range = 'Invalid age or no age specified'
      }

      return range
    }

    service.canAccess = function() {
      // const url = `${CONSTANTS.apiRoot}agent/can/user/access`
      const url = `/userdata/canAccess/`

      return $http.get(url).then((result) => {
        return result.data
      })
    }

    service.getCanAccessResponse = () => {
      return service._canAccessResponse
    }

    service.getSetCanAccessResponse = async function() {
      if (service._canAccessResponse) {
        return service._canAccessResponse
      }
      // let canAccessResponseText = this.sessionStorage.getItem('canAccessResponse')

      // if (!canAccessResponseText) {
      let result = await service.canAccess().then((data) => {
        service._canAccessResponse = data
          // this.sessionStorage.setItem('canAccessResponse', JSON.stringify(this.canAccessResponse))
      })

      console.log(result)
      return service._canAccessResponse
      // }
    }

    function translateRoles(roles) {
      var role = roles[0]

      if (!roles || roles.length === 0) return

      if (role === 'FIELD MGMT') {
        role = 'Field Manager'
      } else if (role === 'AGENT') {
        role = 'Advisor'
      } else if (role === 'ASSISTANT' || role === 'HTK ASSISTANT') {
        role = 'Assistant'
      } else if ((role === 'FOFSUPPORT') || (role === 'DSTSUPPORT')) {
        role = 'Office Staff'
      } else if (role === 'RECRUIT') {
        role = 'Recruit'
      } else if (role === 'CLIENT') {
        role = 'Client'
      } else {
        role = 'Other'
      }

      role = role.split(' ').join('_')

      return role
    }

    service.getFullName = function() {
      const ss = getSession()

      return ss ? ss.name : ''
    }

    service.getSessionID = function() {
      const ss = getSession()

      return ss ? ss.sessionID : ''
    }

    service.getSubGuid = function() {
      var ss = getSession()

      return ss ? ss.subGuid : ''
    }

    service.isInRole = function(role) {
      return service._getRoles().includes(role)
    }

    service.isHomeOfficeUser = () => {
      return service.isInRole('HOMEOFFICE')
    }

    service.isBeneficiaryManagmentAllowed = (isDeathClaim = false) => {
      if (service.isHomeOfficeUser()) {
        const accessResponse = service.getCanAccessResponse()

        return isDeathClaim ? accessResponse?.canManageRolesDuringDeathClaim : accessResponse?.canManageRoles
      }

      return false
    }

    service.canSuppressCorrespondence = () => {
      if (service.isHomeOfficeUser()) {
        const accessResponse = service.getCanAccessResponse()

        return accessResponse?.canSuppressConfirmations
      }

      return false
    }

    service.restrictByIssueState = function(issueState) {
      const isHomeOffice = this.isInRole('HOMEOFFICE')

      if (isHomeOffice) {
        let canAccessResponse = this.getCanAccessResponse()

        if (canAccessResponse.canAccess49 === false && issueState !== 'New York') {
          return true
        }

        if (canAccessResponse.canAccessNY === false && issueState === 'New York') {
          return true
        }
      }

      return false
    }

    service._getRoles = () => {
      const ss = getSession()

      if (ss && ss.roles && (Array.isArray(ss.roles) || ss.roles instanceof Array)) {
        return ss.roles
      }

      return []
    }

    service.isNonAgentOrAgentPlus = () => {
      const userRoles = service._getRoles()

      return !userRoles.includes('AGENT') || userRoles.length > 1
    }

    service.isAClient = function() {
      var ss = getSession()

      isAClient = ss && ss.isClient
      return isAClient || service._inClientState()
    }

    service.isARealClient = function() {
      var ss = getSession()

      return ss && ss.isClient
    }

    service.getCurrentSession = function() {
      var ss = getSession()

      return ss
    }

    service.isClientView = function() {
      var ss = getSession()

      if (isAClient !== null) {
        return service._inClientState() || isAClient
      }

      isAClient = ss && ss.isClient
      return service._inClientState() || isAClient
    }

    service.isAgentView = function() {
      return !service._inClientState() && !service.isClientView()
    }

    service.isAClient_Buffered = function() {
      if (service.isAuthenticated()) {
        isAClientBuffer = service.isAClient()
      }
      return isAClientBuffer
    }

    service.checkRoles = function(rolesToCheck) {
      if (!Array.isArray(rolesToCheck)) {
        throw new Error('Parameter roles must be and array')
      }

      return service._getRoles().some((role) => rolesToCheck.includes(role))
    }

    service.removeSession = function() {
      $cookies.remove('session')
      $cookies.remove('mfaVerified')
      localStorage.removeItem('session')
    }

    // DEAD CODE: NEVER CALLED
    service.loginClient = function(toState) {
      const url = '/auth/pml/client?startUrl=' + window.encodeURIComponent($location.absUrl())

      window.location.href = url
    }

    service.logout = function(toState) {
      const sid = service.getSessionID()

      // Idle.unwatch()

      if (sid) {
        let logoutURL = sid ? CONSTANTS.logoutURL + '?sid=' + sid : CONSTANTS.logoutURL

        logoutURL = service.isAClient() ? logoutURL.replace('{context}', 'client') : logoutURL.replace('{context}', 'agent')

        service.removeSession()
        document.location.href = logoutURL
      } else {
        const clientAppOnly = toState ? toState.clientAppOnly : false
        const loginURL = clientAppOnly ? '/auth/pml/client' : '#/login'

        if (!deviceUtils.isMobilePlatform()) {
          document.location.href = loginURL
        } else {
          $location.path(loginURL).search({
            sid: '',
          })
        }
      }
    }

    service.getSystemMessage = function(isClient) {
      var url
      var promise

      url = CONSTANTS.systemMessageURL.replace('{0}', (isClient ? 'client' : 'corporate'))

      promise = $http.get(url)
        .then(function(httpData) {
          if (httpData.data) {
            return httpData.data
          }

          return null // we didn't understand the response, so don't display any kind of message
        }, function() {
          return null // got a 404 or some error, so don't display any message
        })

      return promise
    }

    service.getSystemMessages = function() {
      let url
      let promise

      url = CONSTANTS.systemMessagesURL

      promise = $http.get(url)
        .then(function(httpData) {
          if (httpData.data) {
            return httpData.data
          }

          return null // we didn't understand the response, so don't display any kind of message
        }, function() {
          return null // got a 404 or some error, so don't display any message
        })

      return promise
    }

    service._inClientState = function() {
      return true
    }

    service.getPolicyHref = function(source, polNumber) {
      if (service.isAClient()) {
        return '#/my-policy/i/' + polNumber
      }

      if (source === 'rps') {
        source = 'inforce'
      }

      return `#/myclients/policy/${source}/${polNumber}`
    }

    return service
  }
