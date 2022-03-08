(function() {
  'use strict'

  angular.module('app.auth', [
    'app', 'app.core', 'app.utils', 'ngIdle',
  ])

  angular
    .module('app.auth')
    .run(run)

  run.$inject = ['$rootScope', '$http', '$state', 'Idle', 'authService', 'deviceUtils', 'stateTransitions', 'navigationStack', 'CONSTANTS', '$log', '$location', 'mfaDataProvider', 'configService', '$urlService']

  /* @ngInject */
  function run($rootScope, $http, $state, Idle, authService, deviceUtils, stateTransitions, navigationStack, CONSTANTS, $log, $location, mfaDataProvider, configService, $urlService) {
    var sessionID = authService.getSessionID()

    $rootScope.auth = authService
    $rootScope.isClientView = authService.isClientView()
    $rootScope.isAgentView = authService.isAgentView()

    if (sessionID) {
      $http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionID

      // disable IE ajax request caching
      $http.defaults.headers.common['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT'
      // extra
      $http.defaults.headers.common['Cache-Control'] = 'no-cache'
      $http.defaults.headers.common['Pragma'] = 'no-cache'
    }

    // Client-side security. Server-side framework MUST add it's
    // own security as well since client-based security is easily hacked
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      const isAuthenticated = authService.isAuthenticated()
      const isNotAuthenticated = !isAuthenticated
      const isDeepLinkState = CONSTANTS.deepLinkStates.indexOf(toState.name) !== -1
      const isMfaVerified = mfaDataProvider.isMfaVerified()
      const isNotMfaVarified = !isMfaVerified

      console.info('*** Switching from %s, to state %s ', fromState.name, toState.name)

      // TODO: Delete this code block.  Does not seem necessary and breaks Insight filtering.
      // if (configService.features.mfaEnabled && isNotMfaVarified && fromState.name === toState.name) {
      //   console.log('Transitioning to same state')
      //   event.preventDefault ? event.preventDefault() : (event.returnValue = false)
      //   return
      // }

      // Handle deep link state
      if (toState.clientAppOnly && isNotAuthenticated && isDeepLinkState) {
        console.info('Detected allowed deep link attempt by unauthenticated user')
        event.preventDefault()
        window.location.href = CONSTANTS.authProxyURL + '/client?startUrl=' + window.encodeURIComponent($location.absUrl())
        return
      }  // Not deep link state
      if (isAuthenticated) {
          // *** MFA Routing ***
        const isNotWhitelistedRoute = ['mfa.check', 'mfa.send-code', 'mfa.submit-code', 'login-client'].indexOf(toState.name) === -1
        const isNotInitialPayment = toState.name !== 'epay.policy.payment'

        console.log('authService.isARealClient(): %s, isNotWhitelistedRoute: %s, mfaEnabled: %s, isNotMfaVarified: %s, mfaVerified: %s, isNotInitialPayment: %s, finalTestResult: %s', authService.isARealClient(), isNotWhitelistedRoute, configService.features.mfaEnabled, isNotMfaVarified, isMfaVerified, isNotInitialPayment, toState.clientAppOnly && isNotWhitelistedRoute && configService.features.mfaEnabled && isNotMfaVarified && isNotInitialPayment)

        if (authService.isARealClient() && isNotWhitelistedRoute && configService.features.mfaEnabled && isNotMfaVarified && isNotInitialPayment) {
          // const returnUrl = window.encodeURIComponent(location.hash)
          const returnUrl = location.hash.substr(1)

          console.log('MFA Check required, redirecting to mfa.check. returnUrl: %s', returnUrl)
          event.preventDefault ? event.preventDefault() : (event.returnValue = false)

          $state.go('mfa.check', {'redirect_url': returnUrl})
          // $urlService.url('/#/mfa/check?redirect_url=/' + returnUrl)
          return
        }

        console.log('MFA Check not required.')

        // *** Enable Idle service if not already running ***
        if (!Idle.running()) {
          Idle.watch()
        }

          // *** Part of search by SSN feature ***
        if ((toState.name.toLowerCase() === 'search.result' && toParams.c && angular.isNumber(parseInt(toParams.c))) &&
            (fromState.name && (fromState.name === 'policy'))) {
          event.preventDefault ? event.preventDefault() : (event.returnValue = false)

          stateTransitions.go('search.result', {
            t: 'result',
            c: '',
          })
        }
      } else if (toState && toState.data && toState.data.secure) { // *** isNotAuthenticated ***
          // *** Logout user if not authenticated and in a route that is marked as secure ***
        event.preventDefault()
        $rootScope.$evalAsync(function() {
          return authService.logout(toState)
        })
      }

      // Sets default footer unless toState matches a policy route, epay route or their children.
      if (/^(policy|epay)(\.)*/.test(toState.name)) {
        $rootScope.$broadcast('updateFooter')
      } else {
        $rootScope.carrierName = 'The Penn Mutual Life Insurance Company'
      }
    })

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      var toUrl, lastObj, lastUrl, state, params

      if (deviceUtils.isMobilePlatform()) {
        toUrl = $state.href(toState, toParams, {
          absolute: false,
        })

        lastObj = navigationStack.getLast()
        lastUrl = $state.href(lastObj.state, lastObj.params, {
          absolute: false,
        })

        if (lastUrl !== toUrl) {
          state = lastUrl === null ? toState : fromState
          params = lastUrl === null ? toParams : fromParams

          navigationStack.push(state, params)
        } else {
          navigationStack.pop()
        }
      }
    })

    $rootScope.$on('IdleStart', function() {
      console.log('IdleStart')
    })

    $rootScope.$on('IdleEnd', function() {
      console.log('IdleEnd')
    })

    $rootScope.$on('IdleTimeout', function() {
      console.log('IdleTimeout')
      authService.logout()
    })

    $rootScope.$on('KeepaliveResponse', function(data, statusText, status) {
      console.log('KeepaliveResponse')
      if (status !== 200) {
        $rootScope.$evalAsync(function() {
          authService.logout()
          console.log('Response status from KeepaliveResponse is not 200, login out the user')
        })
      }
    })
  }

  angular
    .module('app.auth')
    .config(configure)

  configure.$inject = ['$httpProvider', 'KeepaliveProvider', 'IdleProvider', 'CONSTANTS']

  /* @ngInject */
  function configure($httpProvider, KeepaliveProvider, IdleProvider, CONSTANTS) {
    $httpProvider.interceptors.push('authHttpResponseInterceptor')
    IdleProvider.idle(CONSTANTS.IDLE)
    IdleProvider.timeout(CONSTANTS.IDLE_TIMEOUT)
    KeepaliveProvider.interval(CONSTANTS.KEEP_ALIVE_INTERVAL)
    KeepaliveProvider.http(CONSTANTS.KEEP_ALIVE_URL)
  }

  angular
    .module('app.auth')
    .factory('authHttpResponseInterceptor', authHttpResponseInterceptor)

  authHttpResponseInterceptor.$inject = ['$rootScope', '$q', '$location', 'notificationCenterService', 'CONSTANTS', '$injector', '$state', 'MFA_ALLOWED_STATES']

  /* @ngInject */
  function authHttpResponseInterceptor($rootScope, $q, $location, notificationCenterService, CONSTANTS, $injector, $state, MFA_ALLOWED_STATES) {
    return {
      request: function(config) {
        if (config.url !== '/nba-upload') config.timeout = CONSTANTS.globalRequestTimeout

        return config
      },
      response: function(response) {
        $rootScope.offline = false
        return response || $q.when(response)
      },
      responseError: function(rejection) {
        var authService

        window.dataLayer.push({
          event: 'response-error',
          location: $location.$$url,
          status: rejection.status,
          url: rejection.config.url,
        })

        if (rejection.status === 401 && !rejection.config.url.match(/^\/proxy\/core-services-gateway\/policy\/\d+\/canPay/)) {
          // When we get a 401 on the canPay endpoint, then we redirect to a special page.
          // We're OK with letting the epay routing handle that, and won't log out the user.
          rejection.statusText = 'Unauthorized, please try to Sign in again'
          authService = $injector.get('authService')
          authService.logout()
        } else if (rejection.status === 403) {
          rejection.statusText = 'Forbidden access'
          notificationCenterService.add('danger', rejection.statusText, CONSTANTS.notificationType.login, 0)
          authService = $injector.get('authService')

          authService.logout()
        } else if (rejection.status === 404) {
          rejection.statusText = "We couldn't find what you were looking for..."
        } else if (rejection.status === 428) {
          rejection.statusText = 'MFA Verification Required'

          if (!MFA_ALLOWED_STATES.find(allowedState => allowedState === $state.current.name)) {
            console.log('MFA Verification Required: ', $state.current.name)
            location.href = '/#/mfa/check?redirect_url=/#' + $state.current.url
          }
        } else if (!rejection.status || rejection.status === -1) {
          $rootScope.offline = true
          rejection.statusText = 'It appears that you lost your server connection.'
          notificationCenterService.add('danger', rejection.statusText, CONSTANTS.notificationType.login, 0)
        }

        return $q.reject(rejection)
      },
    }
  }
})()
