export {constants}

  // It could be a localIP or /. For production http://pennmutual-qa.pennmutual.com/
  var BASE_URL = '/'

  var DATA_API_BASEURL = BASE_URL + 'proxy/core-services-gateway/'

  var LOGIN_PATH = '#/login'
  var LOGIN_URL = BASE_URL + LOGIN_PATH

  // 'requirementsToFilterOut': {
  //    '159': '1035 Cost Basis',
  //    '348': 'Pharmaceutical Search',
  //    '496': 'Physical Measurements Data (VENDOR USE ONLY)',
  //    '1012300089': 'APS Summary',
  //    '1012300006': 'Inspection Report Alternative'
  // },

  var requirementsToFilterParams = 'omitReq=159&omitReq=348&omitReq=496&omitReq=1012300089&omitReq=1012300006&omitReq=1012300094&omitReq=1012399961&omitReq=1012399960'

  var constants = {
    'apiRoot': DATA_API_BASEURL,
    'isBetaVersion': false,
    'isDataServiceActive': true,
    'BASE_URL': BASE_URL,
    'DEFAULT_ROUTE': '/login',
    'requirementsToFilterParams': requirementsToFilterParams,
    'requirementsToFilterOutValues': ['159', '348', '496', '1012300089', '1012300006', '1012300094', '1012399961', '1012399960'],

    'modules': {
      'myclients': {'id': 'myclients', 'name': 'My Clients'},
      'clientlist': {'id': 'clientlist', 'name': 'Client List'},
      'mydashboard': {'id': 'mydashboard', 'name': 'My Dashboard'},
      'mybusiness': {'id': 'mybusiness', 'name': 'Compensation Statements'},
      'batchstatements': {'id': 'batchstatements', 'name': 'Client Quarterly Statements'},
      'credits': {'id': 'credits', 'name': 'This is Sparta'},
      'myagency': {'id': 'myagency', 'name': 'My Agency'},
      'CLandR': {'id': 'CLandR', 'name': 'Credentials'},
      'ReplyableRequirements': {'id': 'replyableRequirements', 'name': 'Requirement Online Reply'},
      'beneficiaries': {'id': 'beneficiaries', 'name': 'Beneficiaries'},
      'MfaLogin': {'id': 'mfaLogin', 'name': 'Verify Account'},
      'NbaUpload': {'id': 'NbaUpload', 'name': 'Upload Application'},
      'SalesAchievementReports': {'id': 'SalesAchievementReports', 'name': 'Sales & Achievement Reports'},
    },

    'IDLE': 24 * 60, // In seconds  // MP  consider a smaller value
    'IDLE_TIMEOUT': 60, // In seconds, this specifies how often the Keepalive event is triggered and the HTTP request is issued.
    'KEEP_ALIVE_INTERVAL': 2 * 60, // In seconds,
    'KEEP_ALIVE_URL': BASE_URL + 'user/keepalive',

    'MAX_NUMBER_RECENTS': 10,

    'recentlyViewed': {
      'version': 'rv7',
      'intervalForUpdate': 15 * 60 * 1000,
      'expirationTime': 15 * 60 * 1000,
      'ADD': true,
      'REMOVE': false,
    },

    'events': {
      'REFRESH_PAYMENT_METHODS': 'refreshPaymentMethods',
      'CLOSE_POPUPS_AND_MENUS': 'closePopupsAndMenus',
    },

    'usStates': [
      {
        'display': 'Alabama',
        'name': 'AL',
      },
      {
        'display': 'Alaska',
        'name': 'AK',
      },
      {
        'display': 'American Samoa',
        'name': 'AS',
      },
      {
        'display': 'Arizona',
        'name': 'AZ',
      },
      {
        'display': 'Arkansas',
        'name': 'AR',
      },
      {
        'display': 'California',
        'name': 'CA',
      },
      {
        'display': 'Colorado',
        'name': 'CO',
      },
      {
        'display': 'Connecticut',
        'name': 'CT',
      },
      {
        'display': 'Delaware',
        'name': 'DE',
      },
      {
        'display': 'District Of Columbia',
        'name': 'DC',
      },
      {
        'display': 'Federated States Of Micronesia',
        'name': 'FM',
      },
      {
        'display': 'Florida',
        'name': 'FL',
      },
      {
        'display': 'Georgia',
        'name': 'GA',
      },
      {
        'display': 'Guam',
        'name': 'GU',
      },
      {
        'display': 'Hawaii',
        'name': 'HI',
      },
      {
        'display': 'Idaho',
        'name': 'ID',
      },
      {
        'display': 'Illinois',
        'name': 'IL',
      },
      {
        'display': 'Indiana',
        'name': 'IN',
      },
      {
        'display': 'Iowa',
        'name': 'IA',
      },
      {
        'display': 'Kansas',
        'name': 'KS',
      },
      {
        'display': 'Kentucky',
        'name': 'KY',
      },
      {
        'display': 'Louisiana',
        'name': 'LA',
      },
      {
        'display': 'Maine',
        'name': 'ME',
      },
      {
        'display': 'Marshall Islands',
        'name': 'MH',
      },
      {
        'display': 'Maryland',
        'name': 'MD',
      },
      {
        'display': 'Massachusetts',
        'name': 'MA',
      },
      {
        'display': 'Michigan',
        'name': 'MI',
      },
      {
        'display': 'Minnesota',
        'name': 'MN',
      },
      {
        'display': 'Mississippi',
        'name': 'MS',
      },
      {
        'display': 'Missouri',
        'name': 'MO',
      },
      {
        'display': 'Montana',
        'name': 'MT',
      },
      {
        'display': 'Nebraska',
        'name': 'NE',
      },
      {
        'display': 'Nevada',
        'name': 'NV',
      },
      {
        'display': 'New Hampshire',
        'name': 'NH',
      },
      {
        'display': 'New Jersey',
        'name': 'NJ',
      },
      {
        'display': 'New Mexico',
        'name': 'NM',
      },
      {
        'display': 'New York',
        'name': 'NY',
      },
      {
        'display': 'North Carolina',
        'name': 'NC',
      },
      {
        'display': 'North Dakota',
        'name': 'ND',
      },
      {
        'display': 'Northern Mariana Islands',
        'name': 'MP',
      },
      {
        'display': 'Ohio',
        'name': 'OH',
      },
      {
        'display': 'Oklahoma',
        'name': 'OK',
      },
      {
        'display': 'Oregon',
        'name': 'OR',
      },
      {
        'display': 'Palau',
        'name': 'PW',
      },
      {
        'display': 'Pennsylvania',
        'name': 'PA',
      },
      {
        'display': 'Puerto Rico',
        'name': 'PR',
      },
      {
        'display': 'Rhode Island',
        'name': 'RI',
      },
      {
        'display': 'South Carolina',
        'name': 'SC',
      },
      {
        'display': 'South Dakota',
        'name': 'SD',
      },
      {
        'display': 'Tennessee',
        'name': 'TN',
      },
      {
        'display': 'Texas',
        'name': 'TX',
      },
      {
        'display': 'Utah',
        'name': 'UT',
      },
      {
        'display': 'Vermont',
        'name': 'VT',
      },
      {
        'display': 'Virgin Islands',
        'name': 'VI',
      },
      {
        'display': 'Virginia',
        'name': 'VA',
      },
      {
        'display': 'Washington',
        'name': 'WA',
      },
      {
        'display': 'West Virginia',
        'name': 'WV',
      },
      {
        'display': 'Wisconsin',
        'name': 'WI',
      },
      {
        'display': 'Wyoming',
        'name': 'WY',
      },
    ],

    'serverLog': BASE_URL + 'user/log',
    'appUserAccountURL': BASE_URL + 'useraccount',
    'appClientUserAccountURL': BASE_URL + 'clientuseraccount',
    'whatsNewURL': BASE_URL + 'whats-new/content',
    'whatsNewCodeURL': BASE_URL + 'whats-new/code',
    'userDataURL': BASE_URL + 'userdata',
    'recentlyURL': BASE_URL + 'recently',
    'refreshURL': DATA_API_BASEURL + 'refresh/whatismybusiness?' + requirementsToFilterParams,
    'recentpartiesUrl': BASE_URL + 'recentparties',
    'loginPath': LOGIN_PATH,
    'loginURL': LOGIN_URL,
    'logoutURL': BASE_URL + 'auth/pml/{context}/logout',
    'systemMessageURL': BASE_URL + 'message/{0}',
    'systemMessagesURL': BASE_URL + 'messages',
    'clientProfileURL': 'clientProfile',
    'authProxyURL': BASE_URL + 'auth/pml',
    'sidCallback': '?sid=',
    'notFoundMessage': 'Sorry, we couldn\'t find <br/> what you were looking for...',
    'whoAreMyParties': DATA_API_BASEURL + 'agent/whoaremyparties/name/{0}',
    'searchURL': DATA_API_BASEURL + 'search/{0}?page={1}',
    'policySummaryURL': DATA_API_BASEURL + 'policy/{0}/summary?' + requirementsToFilterParams,
    'policyBaseURL': DATA_API_BASEURL + 'policy/{0}/base',
    'policyLoanQuoteURL': DATA_API_BASEURL + 'policy/{0}/quote/loan/max',
    'policyValuesURL': DATA_API_BASEURL + 'policy/{0}/values',
    'policyClientsURL': DATA_API_BASEURL + 'policy/{0}/clients',
    'policyLoansURL': DATA_API_BASEURL + 'policy/{0}/loans',
    'policyAgentsURL': DATA_API_BASEURL + 'policy/{0}/agents',
    'policyCoveragesURL': DATA_API_BASEURL + 'policy/{0}/{1}/coverages',
    'policyFundsURL': DATA_API_BASEURL + 'policy/{0}/funds?showEstValues=true',
    'policyAvailableFundsURL': DATA_API_BASEURL + 'policy/{0}/funds/available',
    'policyCanAllocateFundsURL': DATA_API_BASEURL + 'policy/{0}/can/allocate',
    'policyCanTransferFundsURL': DATA_API_BASEURL + 'policy/{0}/can/transfer',
    'policyTransferFundsURL': DATA_API_BASEURL + 'policy/{0}/funds/transfer',
    'policyTransferSourceFundsURL': DATA_API_BASEURL + 'policy/{0}/funds/transfer/source',
    'policyTransferDestinationFundsURL': DATA_API_BASEURL + 'policy/{0}/funds/transfer/destination',
    'policyRebalanceDestinationFundsURL': DATA_API_BASEURL + 'policy/{0}/funds/rebalance/destination',
    'policyRebalanceFundsURL': DATA_API_BASEURL + 'policy/{0}/can/rebalance',
    'policyArrangementsURL': DATA_API_BASEURL + 'policy/{0}/arrangements',
    'policyTablesURL': DATA_API_BASEURL + 'policy/{0}/tables?type={1}',
    'policyTransactionsURL': DATA_API_BASEURL + 'policy/{0}/transactions/combined?page={1}',
    'policyTransactionsSummaryURL': DATA_API_BASEURL + 'policy/{0}/transactions/summary',
    'policyPaymentDetailsURL': DATA_API_BASEURL + 'policy/{0}/paymentDetails',
    'policyPaymentSubmissionURL': DATA_API_BASEURL + 'policy/{0}/makePayment',
    'policyQuoteLoanPayoff': DATA_API_BASEURL + 'policy/{0}/quote/loan/payoff',
    'policyCanConvertTerm': DATA_API_BASEURL + 'policy/{0}/can/convert/term',
    'policyCanUserConvertTerm': DATA_API_BASEURL + 'policy/{0}/can/user/convert/term',

    'alertsDismissedCount': DATA_API_BASEURL + 'alerts/search?dismiss=false',
    'searchAlertsURL': DATA_API_BASEURL + 'alerts/search',
    'alertsSummaryURL': DATA_API_BASEURL + 'alerts/summary',
    'alertsByCategoryURL': DATA_API_BASEURL + 'alerts/category/%22{0}%22/{1}?page={2}',
    'alertsByCategorySortedURL': DATA_API_BASEURL + 'alerts/category/%22{0}%22/{1}?sort={3}&order={4}&page={2}',
    'alertsByPolicyURL': DATA_API_BASEURL + 'alerts/policy/{0}/{1}',
    'alertsByClientURL': DATA_API_BASEURL + 'alerts/client/{0}/{1}',
    'alertDetailsURL': DATA_API_BASEURL + 'alerts/{0}',
    'clientAddressesURL': DATA_API_BASEURL + 'client/whataremyaddresses',

    'alertsDismissCategory': DATA_API_BASEURL + 'alerts/category/{0}/readby',
    'alertsCategoryMarkRead': DATA_API_BASEURL + 'alerts/category/{0}/readby',

    // These need to be PUT with eventid as a form parameter.
    'alertsRead': DATA_API_BASEURL + 'alerts/readby',
    'alertsMarkRead': DATA_API_BASEURL + 'alerts/markRead',
    'alertsArchive': DATA_API_BASEURL + 'alerts/archive',
    'alertsUnarchive': DATA_API_BASEURL + 'alerts/unarchive',
    'changePasswordURL': 'password/change',
    'correspondencesURL': DATA_API_BASEURL + 'document/policy/search?{pids}',
    'correspondencesDownloadURL': DATA_API_BASEURL + 'document/policy/download?docId={0}&sid={1}',

    'compensationURL': DATA_API_BASEURL + 'document/agent/search?docType=13',
    'compensationFilterURLBase': DATA_API_BASEURL + 'document/agent/search?',
    'compensationDownloadURL': DATA_API_BASEURL + 'document/agent/download?docid={0}&sid={1}',
    'policyDownloadURL': DATA_API_BASEURL + 'document/policy/download?docid={0}&sid={1}',
    'welisURL': BASE_URL + 'auth/welis?pid={pid}&sid={sid}',
    'documentTypesURL': DATA_API_BASEURL + 'document/policy/types?{pids}',
    'agentDocumentTypesURL': DATA_API_BASEURL + 'document/agent/types',
    'downloadBOBURL': DATA_API_BASEURL + 'agent/whatismybusiness/download',
    'downloadAlerts': DATA_API_BASEURL + 'alerts/search/download',
    'downloadRequirements': DATA_API_BASEURL + 'policy/{0}/requirements/download?' + requirementsToFilterParams,
    'conversionCreditURL': DATA_API_BASEURL + 'policy/{0}/conversionCredit?conversionAmount={1}&asOfDate={2}&retainedAmount={3}&cancelledAmount=0',
    'transitionType': {
      'SLIDE': 'slide',
      'FLIP': 'flip',
      'FADE': 'fade',
      'DRAWER': 'drawer',
    },

    'annuitySystematicWithdrawalTypes': [
      'specified amount withdrawal - gross', 'specified amount withdrawal', 'required minimum distribution withdrawal',
      'lifetime benefit withdrawal', 'living benefit withdrawal', 'surrender free withdrawal',
    ],

    'automaticAssetRebalanceTypes': [
      'asset reallocation',
    ],

    'standardAssetRebalancing': [
      'standard asset rebalancing',
    ],

    'dollarCostAveragingTypes': [
      'dollar cost averaging',
    ],

    'agentWhatismybusinessURL': DATA_API_BASEURL + 'agent/whatismybusiness?page={pageNumber}&' + requirementsToFilterParams,
    'pendingPoliciesByAgentURL': DATA_API_BASEURL + 'agent/whatismybusiness?page={0}&holdingstatus=3&' + requirementsToFilterParams,
    'unsubmittedApplicationsURL': DATA_API_BASEURL + 'agent/whatismybusiness/app?page={0}{1}&sort={2}&order={3}&holdingstatus=1012300001',
    'unsubmittedApplicationCountsURL': DATA_API_BASEURL + '/policy/app/counts/policystatus?holdingstatus=1012300001',
    'unsubmittedApplicationsTotalCountURL': DATA_API_BASEURL + 'agent/whatismybusiness/app?page=1&holdingstatus=1012300001',
    'deliveryStatusCountsURL': DATA_API_BASEURL + 'policy/counts/substatus?holdingStatus=1012300005',
    'pendingPolicyApplicationURL': DATA_API_BASEURL + 'policy/pending/{0}/application',
    'pendingRequirementsURL': DATA_API_BASEURL + 'policy/pending/{0}/requirements?' + requirementsToFilterParams,
    'requirementsURL': DATA_API_BASEURL + 'policy/pending/{0}/requirements?' + requirementsToFilterParams,
    'productTypesUrl': DATA_API_BASEURL + 'policy/counts/producttype',
   // 'productTypesUrl': DATA_API_BASEURL + 'policy{/source}/counts/producttype',
    'partiesByNameOrOfficeCode': DATA_API_BASEURL + 'agent/whoaremyparties/name/{0}?page={1}',
    'partyByRefreshKey': DATA_API_BASEURL + 'agent/key/{0}',

    'pendingPoliciesCountsURL': DATA_API_BASEURL + '/policy/counts?holdingstatus=3',
    'pendingPoliciesCountsByLifeURL': DATA_API_BASEURL + 'policy/counts/producttype?lineofbusiness=Life&holdingstatus=3',

    'pendingPoliciesCountsByAnnuityURL': DATA_API_BASEURL + 'policy/counts/producttype?lineofbusiness=Annuity&holdingstatus=3',

   // 'inforcePoliciesCountsURL': DATA_API_BASEURL + 'policy/inforce/counts/lineofbusiness?holdingstatus=Active',
   // 'inforceCountsByLifeURL': DATA_API_BASEURL + 'policy/inforce/counts/producttype?lineofbusiness=Life&?holdingstatus=Active',
  //  'inforceCountsByAnnuityURL': DATA_API_BASEURL + 'policy/inforce/counts/producttype?lineofbusiness=Annuity&?holdingstatus=Active',

    'taxInfoURL': DATA_API_BASEURL + 'policy/{0}/taxinfo',

    'totalFaceAmountURL': DATA_API_BASEURL + 'policy/sum/faceamount/holdingstatus',
    'totalDeathBenefitURL': DATA_API_BASEURL + 'policy/sum/policyvalue/holdingstatus',

    'insuredAgePoliciesURL': DATA_API_BASEURL + 'policy/counts/primaryissueage?holdingstatus=Active',
    'currentAgePoliciesURL': DATA_API_BASEURL + 'policy/inforce/counts/primarydob?startdate=1990-01-01&enddate=2030-01-01&gap=%2B1YEAR&holdingstatus=Active',
    'inforceAgePoliciesURL': DATA_API_BASEURL + 'policy/inforce/counts/policyeffdate?startdate=1900-01-01&enddate=2016-05-19&gap=%2B1YEAR&holdingstatus=Active',

    'fundsPoliciesURL': DATA_API_BASEURL + 'policy/sum/Large Cap',
    'statesPoliciesCountsURL': DATA_API_BASEURL + 'policy/counts/issuestate?holdingstatus=Active',
    'statePoliciesURL': DATA_API_BASEURL + 'policy/counts/holdingstatus?issuestate={0}',

    'clientActionsURL': DATA_API_BASEURL + 'client/actions',
    'clientPartyInfoURL': DATA_API_BASEURL + 'client/whoami',
    'clientPoliciesURL': DATA_API_BASEURL + 'client/mypolicies?page={0}',
    'clientMyAgentsURL': DATA_API_BASEURL + 'client/myagents',
    'clientAceInfoURL': DATA_API_BASEURL + 'client/isAceClient',
    'clientIsResidentForStateURL': DATA_API_BASEURL + 'client/is/resident/{0}',
    'clientAccountsURL': DATA_API_BASEURL + 'client/payment/accounts',
    'clientSetDefaultAccount': DATA_API_BASEURL + 'client/payment/accounts/default/{0}',
    'clientDeleteAccount': DATA_API_BASEURL + 'client/payment/accounts/{0}',

    'notifyURL': DATA_API_BASEURL + 'notify/{0}?sid={1}',

    'popups': {
      'MAIN_MENU_ID': 'MAIN_MENU_ID',
      'ALERTS_MENU_ID': 'ALERTS_MENU_ID',
      'AGENT_POPUP_ID': 'AGENT_POPUP_ID',
    },

    'alertsView': {
      'read': 'read',
      'unread': 'unread',
      'all': '',
    },

    'gaEventAction': {
      'BTN_CLICKED': 'BUTTON CLICKED',
      'ANNOUNCEMENTS_SHOWS': 'ANNOUNCEMENTS SHOWS',
      'ANNOUNCEMENTS_DISMISSES': 'ANNOUNCEMENTS DISMISSES',
    },

    'searchTypeResult': {
      'client': 'clientTypeResult',
      'policy': 'policyTypeResult',
    },

    'clientRoles': {
      'owner': 'owner',
      'jointOwner': 'joint owner',
      'annuitant': 'annuitant',
      'assignee': 'assignee',
      'insured': 'insured',
      'payor': 'payor',
      'payor2': 'payer',
    },

    'agentRoles': {
      'superior': 'Superior Agent',
      'office': 'Office',
    },

    'NO_LABEL': 'No',
    'pageTitleSeparator': ' - ',
    'loadingFieldTmpValue': 'Loading...',
    'notAvailableInfo': 'Not available',
    'notApply': 'N/A',
    'notFound': 'Not found',
    'emDash': '—',
    'globalRequestTimeout': 20000,
    'spinnerDelay': 200,

    'policyPendingStatuses': {
      'pending': 'pending',
      'pending issue, application accepted': 'pending issue, application accepted',
      'declined': 'declined',
      'pending issue': 'pending issue',
    },

    'policySource': {
      'application': 'app',
      'inForce': 'inforce',
      'pending': 'pending',
      'notPaid': 'notpaid',
      'closed': 'closed',
      'rps': 'rps',
    },

    // MP (REMOVE THIS WHOLE BLOCK when we refactor holdingstatues and move to a type) discuss with Jeff and Paul
    'holdingStatus': {
      'active': 'active',
      'pending': 'pending',
      'issuedNotPaid': '1012300005',
    },

    // TODO: We should probably opt to use the below structure over the structure above from here on out since this is the 'official' word from core services.
    'holdingStatusTypes': {
      'active': {
        'typeCode': '1',
        'description': 'Active',
      },
      'inforce': {
        'typeCode': '1',
        'description': 'Active',
      },
      'issuedNotPaid': {
        'typeCode': '1012300004',  // MP !!! REVIEW IS THIS USED AND LOOKS INCORRECT!!!!
        'description': 'Issued Not Paid',
      },
      'notpaid': {
        'typeCode': '1012300004',
        'description': 'Issued Not Paid',
      },
      'suspended': {
        'typeCode': '4',
        'description': 'Suspended',
      },
      'inactive': {
        'typeCode': '2',
        'description': 'Inactive',
      },
      'pending': {
        'typeCode': '3',
        'description': 'Pending',
      },
      'issuedNotPaidPending': {
        'typeCode': '1012300005', // pending issued not paid ref http://pmlwiki/display/sdf/Holding+and+Policy+Status
        'description': 'Issued',
      },
      'closed': {
        'typeCode': '1012300006',
        'description': 'Closed',
      },
      'issuedPaid': {
        'typeCode': '1012300007',
        'description': 'Issued Paid',
      },
      'applicationStarted': {
        'typeCode': '1012300001',
        'description': 'Application Started',
      },
      'applicationCompleted': {
        'typeCode': '1012300002',
        'description': 'Application Completed',
      },
      'applicationArchived': {
        'typeCode': '1012300008',
        'description': 'Application Archived',
      },
      'applicationTerminated': {
        'typeCode': '1012300003',
        'description': 'Application Terminated',
      },
    },

    'multipleAdvisorNameLabel': 'Multiple',

    'productCodes': {
      'MYGA': 'myga',
      'FIA': 'fia',
    },

    'policyRestrictionCodes': ['There are multiple restrictions', 'Special Conditions', 'Special Quote'],
    'policyStatusExemptions': ['Death Claim Pending'],
    'policyRestricitonHeaderMessage': 'Please contact Client Services for information on this policy.',
    'policyRestrictionErrorMessage': 'Client Services is available Monday through Friday, 8:30am to 6:00pm ET, at (800) 523-0650.',
    'policyRestrictionNYErrorMessage': 'Client Services is available Monday through Friday, 8:30am to 6:00pm ET, at (855) 446-7393.',

    'notificationType': {
      'system': 'system',
      'login': 'login',
      'client': 'client',
      'policy': 'policy',
      'systemUnavailability': 'systemUnavailability',
    },

    'NOTIFICATION_MESSAGES_TEMPLATE': '<span>{0}\'s</span> {1} {2}',

    'NOTIFICATION_MESSAGES_HAPPY_BIRTHDAY_TEMPLATE': '{0} {1}!',

    'NOTIFICATION_MESSAGES': {
      HAPPY_BIRTHDAY: 'Happy birthday! Your birthday is',
      BIRTHDAY: 'birthday is',
      POLICY_TERMINATION: 'Policy Maturity Date is',
      POLICY_ANNIVERSARY: 'Policy Anniversary Date is',
      POLICY_LAPSED: 'This policy has lapsed. Please contact your Financial Professional.',
    },

    'annuityTaxStatuses': {
      NON_QUALIFIED: 'NON-QUALIFIED',
    },

    'eventId': {
      'CLIENT_BIRTH_DAY': 100,
      'POLICY_ANNIVERSARY': 101,
      'POLICY_TERMINATION': 102,
      'NOTIFY_AGENT': 103,
      'NOTIFY_CLIENT': 104,
      'POLICY_LAPSE': 105,
      'SYSTEM': 106,
    },

    'eventType': {
      info: 'info',
      warning: 'warning',
      danger: 'danger',
      success: 'success',
    },

    'SOCKET_MESSAGE': {
      CONNECT: 'connect',
      DISCONNECT: 'disconnect',
      NOTIFY_CLIENT: 'notify-client',
      NOTIFY_AGENT: 'notify-agent',
    },

    'personPartyType': 'Person',
    'annuityLineOfBusiness': 'annuity',
    'primaryInsured': 'Primary Insured',
    'policyRequirementPendingType': 'pending',

    'pendingPolicyAgentRoles': {
      'servicing': 'primary servicing advisor',
      'primary': 'primary writing advisor',
      'additional': 'additional writing advisor',
    },

    'mappedAgentRoles': {
      'primaryServicingAdviser': {
        'description': 'Servicing',
        'typeCode': '38',
      },
      'primaryWritingAdviser': {
        'description': 'Primary Writing',
        'typeCode': '37',
      },
      'additionalWritingAdviser': {
        'description': 'Additional Writing',
        'typeCode': '52',
      },
      'office': {
        'description': 'Office',
        'typeCode': '46',
      },
    },

    'NYBusiness': {
      criteria: {
        NYOnly: 'NY State',
        excludeNY: '49 States',
      },
      ny: 'New York',
    },

    // typeCode -> weight
    'agentRoleSortWeights': {
      '38': 0,
      '37': 1,
      '52': 2,
      '46': 999,
    },

    'policyRequirementType': {
      'submitted': 'submitted',
      'add': 'add',
      'ordered': 'order',
      'completed': 'completed',
      'cancelled': 'cancelled',
      'waived': 'waived',
      'received': 'received',
    },

    'conversionCreditsMinimum': 50000,
    'conversionCreditsRetainedMinimum': 100000,

    'paymentsMode': {
      'monthly': 'monthly',
      'quarterly': 'quarterly',
      'semiAnnual': 'semi-annual',
      'annual': 'annual',
      'singlePay': 'single pay',
    },

    'PAYMENT_MODE_TC': {
      'annual': '1',
      'semi-annual': '2',
      'quarterly': '3',
      'monthly': '4',
    },

    'paymentMethods': {
      'noBilling': {
        'typeCode': '1',
        'description': 'No Billing',
      },
      'regularBilling': {
        'typeCode': '2',
        'description': 'Regular Billing',
      },
      'listBilling': {
        'typeCode': '5',
        'description': 'List Billing',
      },
      'payrollDeduction': {
        'typeCode': '6',
        'description': 'Payroll Deduction',
      },
      'electronicFundsTransfer': {
        'typeCode': '7',
        'description': 'Electronic Funds Transfer',
      },
      'suspendedBilling': {
        'typeCode': '11',
        'description': 'Suspended Billing',
      },
      'payFromPremiumDepositFund': {
        'typeCode': '12',
        'description': 'Pay From Premium Deposit Fund',
      },
      'discountedPremium': {
        'typeCode': '16',
        'description': 'Discounted Premium',
      },
      'paidFromDividends': {
        'typeCode': '17',
        'description': 'Paid From Dividends',
      },
      'automatedPremiumOffset': {
        'typeCode': '25',
        'description': 'Automated Premium Offset',
      },
      'waiverOfPremium': {
        'typeCode': '30',
        'description': 'Waiver Of Premium',
      },
      'pensionTrust': {
        'typeCode': '1012300001',
        'description': 'Pension Trust',
      },
      'singlePremium': {
        'typeCode': '1012399920',
        'description': 'Single Premium',
      },
    },

    'wholeLifeLapseOutcomes': {
      'none': {
        'typeCode': '1',
        'description': 'None: Lapse',
      },
      'extendedTermInsuarance': {
        'typeCode': '2',
        'description': 'Extended Term Insurance',
      },
      'reducedPaidUp': {
        'typeCode': '3',
        'description': 'Reduced Paid-Up',
      },
      'automaticPolicyLoan': {
        'typeCode': '4',
        'description': 'APL: Automatic Policy Loan',
      },
      'automaticPolicyLoanExtendedTerm': {
        'typeCode': '5',
        'description': 'APL Extended Term: APL then Extended Term',
      },
      'automaticPolicyLoanReducedPaidUp': {
        'typeCode': '6',
        'description': 'APL Reduced Paid Up:APL then Reduced Paid Up',
      },
    },

    'productType': {
      'term': 'Term',
      'indeterminatePremiumLifeTerm': 'Indeterminate Premium Life - Term',
      'indeterminatePremium': 'Indeterminate Premium',
      'wholeLife': 'Whole Life',
      'universalLife': 'Universal Life',
      'IUL': 'Indexed Universal Life',
      'variableUniversalLife': 'Variable Universal Life',
      'endowment': 'Endowment',
      'fixedAnnuity': 'Fixed Annuity',
      'variableAnnuity': 'Variable Annuity',
      'indexedAnnuity': 'Indexed Annuity',
      'RPS': 'RPS',
    },

    'productTypeLabel': {
      'faceAmount': 'Base Face Amount',
      'specifiedAmount': 'Base Specified Amount',
    },

    'correspondenceType': {
      'annual statement': 'icon-statement',
      'statement_annual': 'icon-statement',
      'quarterly statement': 'icon-statement',

      'index performance report-annual': 'icon-performance',
      'index performance report-monthly': 'icon-performance',
      'bill': 'icon-bill-01',
      'transaction confirmation': 'icon-confirmation',
      'confirmation': 'icon-confirmation',

      'letter': 'icon-letter',
      'letter annual report': 'icon-letter',
      'tax forms': 'icon-letter',

      'term anniversary letter': 'icon-letter',
      'new business application': 'icon-add',
      'illustration': 'icon-illustration',
      'policy pages': 'icon-letter',
    },

    'compensationDocTypes': [
      {
        typeCode: 14,
        description: 'Producer Compensation Statement',
      },
      {
        typeCode: 15,
        description: 'Producer Corp Compensation Statement',
      },
      {
        typeCode: 16,
        description: 'Producer Corporation Compensation Statement',
      },
      {
        typeCode: 17,
        description: 'HTK Compensation Statement',
      },
      {
        typeCode: 18,
        description: 'HTK 12B1 Trail Detail Statement',
      },
      {
        typeCode: 19,
        description: 'Manager Compensation Statement',
      },
    ],

    'alertView': {
      'Active': 0,
      'Archived': 1,
      'All': 2,
    },

    'alertGroups': {
      'conservation': 'Conservation',
      'earlyWarning': 'Early Warning',
      'marketing': 'Marketing',
    },

    'prefetchConfig': {
      'recentlyViewedRecordsCount': 3,
      'clientsRecordsCount': 3,
    },

    'paymentsDue': {
      'next': 'Next payment due',
      'past': 'Past due premium',
      'none': 'No payment due at this time',
    },

    'correspondenceDocTypes': {
      'annualStatement': {
        typeCode: 1,
        desc: 'Annual Statement',
      },
      'quarterlyStatement': {
        typeCode: 2,
        desc: 'Quarterly Statement',
      },
      'indexPerformanceReportAnnual': {
        typeCode: 3,
        desc: 'Annual Performance Report',
      },
      'indexPerformanceReportMonthly': {
        typeCode: 4,
        desc: 'Monthly Performance Report',
      },
      'bill': {
        typeCode: 5,
        desc: 'Bill',
      },
      'transactionConfirmation': {
        typeCode: 6,
        desc: 'Transaction Confirmation',
      },
      'letter': {
        typeCode: 7,
        desc: 'Letter',
      },
      'newBusinessApplication': {
        typeCode: 8,
        desc: 'New Business Application',
      },
      'illustration': {
        typeCode: 9,
        desc: 'Illustration',
      },
      'policyPages': {
        typeCode: 10,
        desc: 'Policy Pages',
      },
      'policyDeliveryReceiptSigned': {
        typeCode: 11,
        desc: 'Signed Delivery Receipt',
      },
      'policyDeliveryReceiptUnsigned': {
        typeCode: 12,
        desc: 'Unsigned Delivery Receipt',
      },
    },

    'filterByPartyHistorySize': 6,

    'MONTHS': [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December',
    ],

    'PENNCHECK_WITHDRAWAL_DATES': [
      {
        dom: '1',
        date: '1st',
      },
      {
        dom: '8',
        date: '8th',
      },
      {
        dom: '15',
        date: '15th',
      },
      {
        dom: '22',
        date: '22nd',
      },
    ],

    'PAYMENT_TYPES': {
      INITIAL_PAYMENT: '7',
      PURCHASE_PUA: '393',
      PREMIUM: '1',
      LOAN: '2',
    },

    'RIDER_CODES': {
      GMA6: 'GMA6',
      GIP8: 'GIP8',
      PPP9: 'PPP9',
      GIPY: 'GIPY',
      PPPZ: 'PPPZ',
      INFL: 'INFL',
      GGIB: 'GGIB',
      GGDB: 'GGDB',
      EHDB: 'EHDB',
      IPWB: 'IPWB',
      IPDB: 'IPDB',
      ISWB: 'ISWB',
      GGWB: 'GGWB',
      GMA2: 'GMA2',
    },

    'RIDER_STATUS': {
      ACTIVE: 'Active',
      DEFERRAL: 'Deferral',
      WITHDRAWAL: 'Withdrawal',
      STANDARD: 'Standard',
      LIFETIME: 'Lifetime',
    },

    'RIDER': {
      QUOTED_VALUES_AS_OF: 'Quoted Values As Of',
      BENEFIT_EFFECTIVE_DATE: 'Benefit Effective Date',
      COVERAGE_CHANGE_DATE: 'Coverage Change Date',
      INVESTMENT_STATUS: 'Investment Status',
      EFFECTIVE_BENEFIT_PHASE: 'Effective Benefit Phase',
      STATUS: 'Status',
      LIMITED_VARIABLE: 'Limited Variable',
      ISSUE_STATE: 'Issue State',
      SINGLE_JOINT_LIFE_GUARANTEE: 'Single/Joint Life Guarantee',
      COVERED_LIFE: 'Covered Life',
      COVERED_LIFE_STATUS: 'Covered Life Status',
      COVERED_LIFE_DATE_OF_DEATH: 'Covered Life Date of Death',
      COVERED_LIFE_ISSUE_AGE: 'Covered Life Issue Age',
      COVERED_LIFE_CURRENT_AGE: 'Covered Life Current Age',
      JOINT_COVERED_LIFE: 'Joint Covered Life',
      JOINT_COVERED_LIFE_STATUS: 'Joint Covered Life Status',
      JOINT_COVERED_LIFE_DATE_OF_DEATH: 'Joint Covered Life Date of Death',
      JOINT_COVERED_LIFE_ISSUE_AGE: 'Joint Covered Life Issue Age',
      JOINT_COVERED_LIFE_CURRENT_AGE: 'Joint Covered Life Current Age',
      FIRST_WITHDRAWAL_DATE: '1st Withdrawal Date',
      AGE_OF_ANNUITANT: 'Age of Annuitant',
      AGE_OF_JOINT_ANNUITANT: 'Age of Joint Annuitant',
      INFLATION_FACTOR: 'Inflation Factor',
      INFLATION_AMOUNT: 'Inflation Amount',
      LAST_STEP_UP_DATE: 'Last Step Up Date',
      NEXT_STEP_UP_DATE: 'Next Step Up Date',
      LAST_TRUE_UP_DATE: 'Last True Up Date',
      LAST_TRUE_UP_AMOUNT: 'Last True Up Amount',
      CURRENT_GMAB_BASE_AMOUNT: 'Current GMAB Base Amount',
      RIDER_CHARGE_RATE: 'Rider Charge Rate',
      END_OF_CURRENT_GMAB_PERIOD: 'End of Current GMAB Period',
      FIRST_LIVING_BENEFIT_WITHDRAWAL_DATE: '1st Living Benefit Withdrawal Date',
      FIRST_LIVING_BENEFIT_WITHDRAWAL_AGE: '1st Living Benefit Withdrawal Age',
      CURRENT_EXPENSE_RATE: 'Current Expense Rate',
      ENHANCEMENT_AMOUNT: 'Enhancement Amount',

      // Guaranteed Minimum Accumulation Benefit
      LAST_RENEWAL_DATE: 'Last Renewal Date',
      LAST_TRUE_UP_DATE_GMAB: 'Last True Up Date (GMAB)',
      LAST_TRUE_UP_AMOUNT_GMAB: 'Last True Up Amount (GMAB)',
      CURRENT_GMAB_BASE_AMOUNT_GMAB: 'Current GMAB Base Amount (GMAB)',
      END_OF_CURRENT_GMAB_PERIOD_GMAB: 'End of Current GMAB Period (GMAB)',

      // Guaranteed Minimum Withdrawal Benefit
      LAST_WB_STEP_UP_DATE: 'Last WB Step Up Date',
      NEXT_WB_STEP_UP_DATE: 'Next WB Step Up Date',
      CURRENT_EXPENSE_RATE_GMWB: 'Current Expense Rate (GMWB)',
      WITHDRAWAL_BENEFIT_BASE_FOR_MINIMUM_GUARANTEE: 'Withdrawal Benefit Base for Minimum Guarantee',
      GUARANTEED_GROWTH_RATE: 'Guaranteed Growth Rate',
      ACCRUED_GUARANTEED_GROWTH_AMOUNT: 'Accrued Guaranteed Growth Amount',
      GUARANTEED_GROWTH_BASE: 'Guaranteed Growth Base',
      INFLATION_FACTOR_GMWB: 'Inflation Factor (GMWB)',
      INFLATION_AMOUNT_GMWB: 'Inflation Amount (GMWB)',
      PRE_WITHDRAWAL_BENEFIT_BASE: 'Pre Withdrawal Benefit Base',
      PURCHASE_PAYMENTS_INCLUDING_ACCUMULATION: 'Purchase Payments Including Accumulation',
      HIGHEST_ANNIVERSARY_VALUE: 'Highest Anniversary Value',
      MINIMUM_GUARANTEED_WITHDRAWAL_BENEFIT_BASE: 'Minimum Guaranteed Withdrawal Benefit Base',
      CURRENT_CASH_VALUE: 'Current Cash Value',
      CURRENT_WITHDRAWAL_BENEFIT_BASE: 'Current Withdrawal Benefit Base',
      RETURN_OF_BENEFIT_BASE: 'Return of Benefit Base',
      STANDARD_WITHDRAWAL_BENEFIT_BASE_GMWB: 'Standard Withdrawal Benefit Base (GMWB)',
      STANDARD_WITHDRAWAL_PERCENT_GMWB: 'Standard Withdrawal Percent (GMWB)',
      GUARANTEED_ANNUAL_WITHDRAWAL_AMOUNT_GMWB: 'Guaranteed Annual Withdrawal Amount (GMWB)',
      GUARANTEED_ANNUAL_LIFETIME_WITHDRAWAL_AMOUNT_GMWB: 'Guaranteed Annual Lifetime Withdrawal Amount (GMWB)',
      GUARANTEED_ANNUAL_LIFETIME_WITHDRAWAL_AMOUNT_REMAINING_GMWB: 'Guaranteed Annual Lifetime Withdrawal Amount Remaining (GMWB)',
      LIFETIME_WITHDRAWAL_PERCENT_GMWB: 'Lifetime Withdrawal Percent (GMWB)',
      REMAINING_GUARANTEED_ANNUAL_WITHDRAWAL_AMOUNT_GMWB: 'Remaining Guaranteed Annual Withdrawal Amount (GMWB)',
      REMAINING_STANDARD_WITHDRAWAL_BENEFIT_BALANCE_GMWB: 'Remaining Standard Withdrawal Benefit Balance (GMWB)',
      MINIMUM_NUMBER_OF_YEARS_REMAINING_GMWB: 'Minimum Number of Years Remaining (GMWB)',

      // Standard Withdrawal Option
      STANDARD_WITHDRAWAL_BENEFIT_BASE: 'Standard Withdrawal Benefit Base',
      STANDARD_WITHDRAWAL_PERCENT: 'Standard Withdrawal Percent',
      GUARANTEED_ANNUAL_WITHDRAWAL_AMOUNT: 'Guaranteed Annual Withdrawal Amount',
      REMAINING_GUARANTEED_ANNUAL_WITHDRAWAL_AMOUNT: 'Remaining Guaranteed Annual Withdrawal Amount',
      REMAINING_STANDARD_WITHDRAWAL_BENEFIT_BALANCE: 'Remaining Standard Withdrawal Benefit Balance',
      MINIMUM_NUMBER_OF_YEARS_REMAINING: 'Minimum Number of Years Remaining',
      RETURN_OF_BENEFIT_BASE_REMAINING: 'Return of Benefit Base Remaining',

      // Lifetime Withdrawal Option
      WITHDRAWAL_DATE: 'Withdrawal Date',
      LIFETIME_WITHDRAWAL_BENEFIT_BASE: 'Lifetime Withdrawal Benefit Base',
      GUARANTEED_ANNUAL_LIFETIME_WITHDRAWAL_AMOUNT_REMAINING: 'Guaranteed Annual Lifetime Withdrawal Amount Remaining',
      FIVE_YEAR_WAITING_BONUS_UP_TO: 'Five Year Waiting Bonus Up To',
      FIVE_YEAR_WAITING_BONUS_AVAILABLE: 'Five Year Waiting Bonus Available',
      TEN_YEAR_WAITING_BONUS_UP_TO: 'Ten Year Waiting Bonus Up To',
      TEN_YEAR_WAITING_BONUS_AVAILABLE: 'Ten Year Waiting Bonus Available',
      LIFETIME_WITHDRAWAL_PERCENT: 'Lifetime Withdrawal Percent',
      WAITING_BONUS_EFFECTIVE: 'Waiting Bonus (Effective)',
      TOTAL_LIFETIME_WITHDRAWAL_PERCENTAGE: 'Total Lifetime Withdrawal Percentage',
      GUARANTEED_ANNUAL_LIFETIME_WITHDRAWAL_AMOUNT: 'Guaranteed Annual Lifetime Withdrawal Amount',
      REMAINING_GUARANTEED_ANNUAL_LIFETIME_WITHDRAWAL_AMOUNT: 'Remaining Guaranteed Annual Lifetime Withdrawal Amount',

      // Enhanced Death Benefit
      TOTAL_PURCHASE_PAYMENTS: 'Total Purchase Payments',
      CURRENT_ENHANCED_DEATH_BENEFIT_BASE: 'Current Enhanced Death Benefit Base',
      CURRENT_CASH_VALUE_EDB: 'Current Cash Value (EDB)',
      PURCHASE_PAYMENTS_INCLUDING_ACCUMULATION_EDB: 'Purchase Payments Including Accumulation (EDB)',
      HIGHEST_ANNIVERSARY_VALUE_EDB: 'Highest Anniversary Value (EDB)',
      GROSS_DEATH_BENEFIT: 'Gross Death Benefit',
      STANDARD_DEATH_BENEFIT_EDB: 'Standard Death Benefit (EDB)',
      CURRENT_DEATH_BENEFIT_ENHANCEMENT_AMOUNT: 'Current Death Benefit Enhancement Amount',
      RIDER_CHARGE: 'Rider Charge',
      CURRENT_TOTAL_DEATH_BENEFIT: 'Current Total Death Benefit',

      // Guaranteed Minimum Death Benefit
      WITHDRAWAL_BENEFIT_BASE_FOR_MINIMUM_GUARANTEE_GMDB: 'Withdrawal Benefit Base for Minimum Guarantee (GMDB)',
      ENHANCED_DEATH_BENEFIT_BASE: 'Enhanced Death Benefit Base',
      STANDARD_DEATH_BENEFIT: 'Standard Death Benefit',
      CURRENT_DEATH_BENEFIT_ENHANCEMENT: 'Current Death Benefit Enhancement',
      LAST_STEP_UP_DATE_GMDB: 'Last Step Up Date (GMDB)',
      NEXT_STEP_UP_DATE_GMDB: 'Next Step Up Date (GMDB)',
      CURRENT_EXPENSE_RATE_GMDB: 'Current Expense Rate (GMDB)',
    },

    'POLICY_TABLE_TYPES': {
      STANDARD: 'standard withdrawal',
      LIFETIME: 'lifetime withdrawal',
    },

    'RIDER_FOOTNOTES': {
      ENHANCED_DEATH_BENEFIT_BASE: 'The Current Enhanced Death Benefit Base will be set to the greatest of the quoted values above.',
      CURRENT_TOTAL_DEATH_BENEFIT: 'The Current Death Benefit Values are subject to change based on withdrawal activity and/or market conditions.',
      CURRENT_WITHDRAWAL_BENEFIT_BASE: 'Current Withdrawal Benefit Base will be set to the greatest of the quoted values above. The Current Withdrawal Benefit Base is subject to change based on withdrawal activity and/or market conditions.',
      LIFETIME_WITHDRAWAL_RATES: 'Withdrawal Rates are based on the age of the younger Annuitant/Joint Annuitant. Waiting Bonus is added to the Lifetime Withdrawal Rate if 1st withdrawal occurs within the time frame: 5-9 years = 0.5%, 10+ years = 1.0%',
      LIFETIME_WITHDRAWAL_TABLE: 'Guaranteed Annual Lifetime Withdrawal Amount not available when the younger of the Annuitant/Joint Annuitant is under the age of 59 1/2',
      GUARANTEED_LIFETIME_AMOUNTS: 'The Guaranteed Lifetime Amounts above are guaranteed, provided Early Access Withdrawals are not taken prior to exercising the living benefit guarantee.',
      GUARANTEED_LIFETIME_AMOUNTS_LWO: 'The Guaranteed Lifetime Amounts above are guaranteed, provided Early Access Withdrawals are not taken prior to exercising the living benefit guarantee. (LWO)',
      WAITING_BONUS: 'Waiting bonus not available in NY',
    },

    'CLIENT_ROLES': {
      ANNUITANT: 'Annuitant',
      JOINT_ANNUITANT: 'Joint Annuitant',
      CONTINGENT_ANNUITANT: 'Contingent Annuitant',
      OWNER: 'Owner',
      PAYER: 'Payer',
    },

    'TABLE_HEADERS': {
      LIFETIME: {
        AGE_BAND: 'Age Band',
        AGE: 'Age',
      },
    },

    'PAYMENT_METHOD_NOTE': {
      'Penn Check': 'Your premium payments are paid through the Penn Check program.',
      'Premium Deposit Fund': 'Your scheduled premium will be deducted from your Premium Deposit Fund.',
      'Salary Allotment': 'Your premium payments are paid through a salary allotment program.',
      'Waiver': 'Premiums are being waived under the Disability Waiver of Premium Agreement.',
      'Automated Premium Offset': 'Your policy is using the automated premium offset program to pay your premium',
      'Paid via a PML annuity contract': 'Your premium is being paid by annuity payments from another Penn Mutual contract.',
    },

    'policeDetailValuesLinks': {
      fundSummaries: {
        text: 'Fund Profiles',
        link: 'https://www.pennmutual.com/for-individuals-and-businesses/performance-and-rates/fund-profiles',
        target: '_blank',
      },
      monthyPerformance: {
        text: 'Monthly Performance',
        link: 'https://www.pennmutual.com/for-individuals-and-businesses/performance-and-rates/monthly-performance',
        target: '_blank',
      },
    },

    'states': {
      'EPAY': 'epay',
      'EPAY_HOME': 'epay.home',
      'EPAY_POLICY': 'epay.policy',
      'EPAY_POLICY_PAYMENT': 'epay.policy.payment',
      'EPAY_POLICY_REVIEW': 'epay.policy.review',
      'EPAY_POLICY_CONFIRMATION': 'epay.policy.confirmation',
      'EPAY_POLICY_FAILURE': 'epay.policy.failure',
    },

    'canPayErrors': {
      '1': 'This policy has already been paid.',
    },

    'epayErrors': {
      'ROUTING_NUMBER': 'R038',
      'ROUTING_NUMBER_THOMPSON': 'R039',
      'ACCOUNT_INVALID': 'R070',
      'ACCOUNT_INCOMPLETE': 'R383',
      'PAYMENT_RANGE': 'R362',
      'PAYMENT_DATE': 'R363',
      'INVALID_CREDENTIALS': 'R378',
      'SERVER_500_ERROR': 'H500',
      'NICKNAME_TOO_LONG': 'AN20',
      'PROCESSING_DOWN': 'R999',
      'GUIDELINE_PREMIUM': '29', // TODO: Temporary until true error code is provided.
    },

    'loginErrors': {
      'bad_request': 'There was a problem with your login request. Please try again. [message 400]',
      'invalid_credentials': 'The username and password combination you entered is incorrect. [message 401]',
      'unauthorized_impersonation': 'Your corporate username is not authorized for client impersonation. [message 401]',
      'unauthorized': 'We are unable to allow access at this time. Please try again later. If this problem persists please contact Client Services at 1-800-523-0650. Please call (855) 446-7393 if your policy was issued in New York. [message 403]',
      'locked': 'Your account has been locked. Please contact Client Services at 1-800-523-0650. Please call (855) 446-7393 if your policy was issued in New York.',
      'unverified': 'Your email address is unverified. Please click the link in the previously sent verification email to activate your account (check your spam folder if you have trouble finding the email). For assistance, contact Client Services at 1-800-523-0650. Please call (855) 446-7393 if your policy was issued in New York. [message 403E]',
      'password_change': 'Your account is flagged for a forced password change. Please contact Client Services at 1-800-523-0650. Please call (855) 446-7393 if your policy was issued in New York. [message 403P]',
      'unknown': 'There was a problem trying to log you in. Please try again later. [message 500]',
    },

    'deepLinkStates': [
      'epay.policy.payment',
      'client.me',
      'myPolicy',
    ],

    'httpErrors': {
      'internalServer': {
        'typeCode': 500,
        'description': 'Sorry for the inconvenience, but we are experiencing technical difficulties and are unable to continue.  Please try again later.',
      },
      'notFound': {
        'typeCode': 404,
        'description': 'The page you are looking for doesn\'t exist. You may have followed an old link or have a typo in the web address.',
      },
      'forbidden': {
        'typeCode': 403,
        'description': 'Your browser sent a message that could not be understood. Please try reloading the page.',
      },
      'badRequest': {
        'typeCode': 400,
        'description': 'Your browser sent a message that could not be understood. Please try reloading the page.',
      },
      'unauthorized': {
        'typeCode': 401,
        'description': 'Your browser sent a message that could not be understood. Please try reloading the page.',
      },
      'default': {
        'typeCode': '',
        'description': 'An error has occurred',
      },
    },

    'policyPaymentPeriods': {
      'inside': {
        'typeCode': '1',
        'description': 'Billing Period',
      },
      'outside': {
        'typeCode': '2',
        'description': 'Outside Billing',
      },
      'grace': {
        'typeCode': '3',
        'description': 'Grace',
      },
      'possibleGrace': {
        'typeCode': 'P3',
        'description': 'Possible Grace',
      },
      'mercy': {
        'typeCode': '4',
        'description': 'Mercy',
      },
    },

    'notPayableReasons': {
      'sameTypeProcessed': {
        'typeCode': '1',
        'description': 'A payment of the same type is waiting to be processed.',
      },
      'inactiveSuspended': {
        'typeCode': '2',
        'description': 'This policy is Inactive/Suspended.',
      },
      'pennCheckPaid': {
        'typeCode': '3',
        'description': 'Your premium payments are paid through the Penn Check program.',
      },
      'billingSuspended': {
        'typeCode': '4',
        'description': 'Billing is suspended.',
      },
      'singlePremiumPolicy': {
        'typeCode': '5',
        'description': 'This is a Single Premium policy.',
      },
      'policyStatus': {
        'typeCode': '6',
        'description': 'This is a {0} policy.',
      },
      'salaryAllotmentPaid': {
        'typeCode': '7',
        'description': 'Your premiums are paid through a salary allotment program.',
      },
      'premiumDepositFundDeducted': {
        'typeCode': '8',
        'description': 'Your scheduled premium will be deducted from you Premium Deposit Fund.',
      },
      'automatedPremiumOffsetPaid': {
        'typeCode': '9',
        'description': 'Your policy is using the automated premium offset program to pay your premium.',
      },
      'disabilityWaiver': {
        'typeCode': '10',
        'description': 'Premiums are being waived under the Disability Waiver of Premium Agreement.',
      },
      'outsideBillingPeriod': {
        'typeCode': '11',
        'description': 'The policy is outside of the billing period.',
      },
      'billIntercepted': {
        'typeCode': '12',
        'description': 'The bill is intercepted.',
      },
      'dividends': {
        'typeCode': '13',
        'description': 'Dividends cover premium.',
      },
    },

    'accountResponses': {
      'routingNumberError': {
        'typeCode': 'R038',
        'description': 'Please enter a valid routing number',
      },
      'routingNumberErrorThompson': {
        'typeCode': 'R039',
        'description': 'Please enter a valid routing number',
      },
      'accountUpdate': {
        'typeCode': 'S004',
        'description': 'Account successfully updated',
      },
      'accountAdd': {
        'typeCode': 'S003',
        'description': 'Account successfully added',
      },
      'accountDelete': {
        'description': 'Account successfully deleted',
      },
      'accountDeleteErrorPaymentPending': {
        'typeCode': 'R356',
        'description': 'Account cannot be deleted due to a pending payment',
      },
      'newDefaultAccount': {
        'description': 'The default account has been updated',
      },
    },

    'filterResponses': {
      'notFoundBasedOnFilter': 'No results found based on filter.',
    },

    'MAX_NUMBER_PAYMENT_ACCOUNTS': 5,

    'roleOrders': {
      'Beneficiary': 1,
      'Contingent Beneficiary': 2,
      'Second Contingent Beneficiary': 3,
      'Final Beneficiary': 4,
    },

    'conversionCreditPolicyStatuses': ['Active (Inforce)', 'Lapse Pending', 'Back Billed'],

    'wlDeathBenefitMeta': {
      'baseDeathBenefitAmt': {
        'description': 'Base Death Benefit',
        'sortOrder': 1,
        'sign': '',
        'highlight': false,
      },
      'pUADBTotalAmtITD': {
        'description': 'Paid Up Additions',
        'sortOrder': 2,
        'sign': '+',
        'highlight': false,
      },
      'dBDivDepPostMortDivAmt': {
        'description': 'Dividend Accumulations and Post Mortem Dividends',
        'sortOrder': 3,
        'sign': '+',
        'highlight': false,
      },
      'oYTPurchaseAmt': {
        'description': '1 Year Term Death Benefit',
        'sortOrder': 4,
        'sign': '+',
        'highlight': false,
      },
      'oYTDBRefundAmt': {
        'description': '1 Year Term Dividend Refund',
        'sortOrder': 5,
        'sign': '+',
        'highlight': false,
      },
      'dbRider*': {
        'description': '',
        'sign': '+',
        'sortOrder': 6,
        'highlight': false,
      },
      'deathBenefitAmt': {
        'description': 'Death Benefit',
        'sortOrder': 7,
        'sign': '',
        'highlight': true,
      },
      'loanBalance': {
        'description': 'Loan Balance',
        'sortOrder': 8,
        'sign': '-',
        'highlight': false,
      },
      'dBInterestAmt': {
        'description': 'Death Benefit Interest',
        'sortOrder': 9,
        'sign': '+',
        'highlight': false,
      },
      'premiumDueAmt': {
        'description': 'Premium Due',
        'sortOrder': 10,
        'sign': '-',
        'highlight': false,
      },
      'DBInterestAmt': {
        'description': 'Death Benefit Interest',
        'sortOrder': 11,
        'sign': '+',
        'highlight': false,
      },
      'dBPremRefundAmt': {
        'description': 'Premium Refund',
        'sortOrder': 12,
        'sign': '+',
        'highlight': false,
      },
      'termDivAmt': {
        'description': 'Termination Dividend',
        'sortOrder': 13,
        'sign': '+',
        'highlight': false,
      },
      'netDeathBenefitAmt': {
        'description': 'Net Death Benefit',
        'sortOrder': 14,
        'sign': '',
        'highlight': true,
      },
    },

    'ulDeathBenefitMeta': {
      'baseDeathBenefitAmt': {
        'description': 'Base Death Benefit',
        'sortOrder': 1,
        'sign': '',
        'highlight': false,
      },
      'deathBenefitAmtIncrease': {
        'description': 'Increase',
        'sortOrder': 2,
        'sign': '+',
        'highlight': false,
      },
      'policyValue': {
        'description': 'Cash Value',
        'sortOrder': 3,
        'sign': '+',
        'highlight': false,
      },
      'dbRider*': {
        'description': '',
        'sign': '+',
        'sortOrder': 4,
        'highlight': false,
      },
      'deathBenefitAmt': {
        'description': 'Death Benefit',
        'sign': '',
        'sortOrder': 5,
        'highlight': true,
      },
      'loanBalance': {
        'description': 'Loan Payoff',
        'sign': '-',
        'sortOrder': 6,
        'highlight': false,
      },
      'netDeathBenefitAmt': {
        'description': 'Net Death Benefit',
        'sign': '',
        'sortOrder': 7,
        'highlight': true,
      },
    },

    'wlCashSurrenderValueMeta': {
      'policyValue': {
        'description': 'Guaranteed Cash Value',
        'sortOrder': 1,
        'sign': '',
        'highlight': true,
      },
      'pUACashValueTotalAmt': {
        'description': 'Paid Up Additions Cash Value',
        'sortOrder': 2,
        'sign': '+',
        'highlight': false,
      },
      'oYTCVRefundAmt': {
        'description': 'One Year Term Cash Value/Refund Value',
        'sortOrder': 3,
        'sign': '+',
        'highlight': false,
      },
      'divOnDepositAmt': {
        'description': 'Dividends on Deposit',
        'sortOrder': 4,
        'sign': '+',
        'highlight': false,
      },
      'divOnDepositIntAmt': {
        'description': 'Dividend on Deposit Interest',
        'sortOrder': 5,
        'sign': '+',
        'highlight': false,
      },
      'termDivAmt': {
        'description': 'Termination Dividend',
        'sortOrder': 6,
        'sign': '+',
        'highlight': false,
      },
      'unusedReduceDividend': {
        'description': 'Unused Reduce Dividend',
        'sortOrder': 7,
        'sign': '+',
        'highlight': false,
      },
      'premiumRefundAmt': {
        'description': 'Premium Refund',
        'sortOrder': 8,
        'sign': '+',
        'highlight': false,
      },
      'surrLoanBalance': {
        'description': 'Loan Payoff',
        'sortOrder': 9,
        'sign': '-',
        'highlight': false,
      },
      'netSurrenderValue': {
        'description': 'Net Cash Surrender Value',
        'sortOrder': 10,
        'sign': '',
        'highlight': true,
      },
    },

    'ulCashSurrenderValueMeta': {
      'policyValue': {
        'description': 'Cash Value',
        'sortOrder': 1,
        'sign': '',
        'highlight': true,
      },
      'surrenderChargeAmt': {
        'description': 'Surrender Charges',
        'sortOrder': 2,
        'sign': '-',
        'highlight': false,
      },
      'surrLoanBalance': {
        'description': 'Loan Payoff',
        'sortOrder': 3,
        'sign': '-',
        'highlight': false,
      },
      'netSurrenderValue': {
        'description': 'Net Surrender Value',
        'sortOrder': 4,
        'sign': '',
        'highlight': true,
      },
      'enhancedSurrenderValue': {
        'description': 'Enhanced Surrender Value',
        'sortOrder': 5,
        'sign': '',
        'highlight': true,
      },
    },

    'annuityCashSurrenderValueMeta': {
      'policyValue': {
        'description': 'Total Surrender Amount:',
        'sortOrder': 1,
        'sign': '',
        'highlight': true,
        'isTotal': false,
      },
      'surrenderChargeAmt': {
        'description': 'Surrender Charges and Fees:',
        'sortOrder': 2,
        'sign': '-',
        'highlight': false,
        'isTotal': false,
      },
      'surrLoanBalance': {
        'description': 'Surrender Loan Balance:',
        'sortOrder': 3,
        'sign': '-',
        'highlight': false,
        'isTotal': false,
      },
      'netSurrenderValue': {
        'description': 'Net Cash Surrender Value:',
        'sortOrder': 4,
        'sign': '',
        'highlight': true,
        'isTotal': true,
      },
      'minimumGuarSurrenderValue': {
        'description': 'Minimum Guaranteed Surrender Value:',
        'sortOrder': 5,
        'sign': '',
        'highlight': false,
        'isTotal': false,
      },
    },

    'loanMeta': {
      'loanAmt': {
        'description': 'Loan Principal',
        'sortOrder': 1,
        'sign': '',
        'highlight': false,
        'valueFilter': 'currency',
      },
      'loanIntAmtDue': {
        'description': 'Accrued Loan Interest',
        'sortOrder': 2,
        'sign': '+',
        'highlight': false,
        'valueFilter': 'currency',
      },
      'loanBalance': {
        'description': 'Loan Balance',
        'sortOrder': 3,
        'sign': '',
        'highlight': true,
        'valueFilter': 'currency',
      },
      'loanInterestRate': {
        'description': 'Loan Interest Rate',
        'sortOrder': 4,
        'sign': '',
        'highlight': false,
        'valueFilter': 'percent',
      },
      'loanType': {
        'description': 'Loan Type',
        'sortOrder': 5,
        'sign': '',
        'highlight': false,
        'valueFilter': '',
      },
    },

    'termDeathBenefitMeta': {
      'baseDeathBenefitAmt': {
        'description': 'Base Death Benefit',
        'sortOrder': 1,
        'sign': '',
        'highlight': false,
      },
      'dBDivDepPostMortDivAmt': {
        'description': 'Dividend Accumulations and Post Mortem Dividends',
        'sortOrder': 2,
        'sign': '+',
        'highlight': false,
      },
      'deathBenefitAmt': {
        'description': 'Death Benefit',
        'sortOrder': 3,
        'sign': '',
        'highlight': true,
      },
      'premiumDueAmt': {
        'description': 'Premium Due',
        'sortOrder': 4,
        'sign': '-',
        'highlight': false,
      },
      'dBInterestAmt': {
        'description': 'Death Benefit Interest',
        'sortOrder': 5,
        'sign': '+',
        'highlight': false,
      },
      'dBPremRefundAmt': {
        'description': 'Premium Refund',
        'sortOrder': 6,
        'sign': '+',
        'highlight': false,
      },
      'netDeathBenefitAmt': {
        'description': 'Net Death Benefit',
        'sortOrder': 7,
        'sign': '',
        'highlight': true,
      },
    },

    'sevenPayGuidelinePremiumMeta': {
      'guidelineSinglePrem': {
        'description': 'GLP Single',
        'sortOrder': 1,
        'valueFilter': 'currency',
      },
      'guidelineAnnPrem': {
        'description': 'GLP Level',
        'sortOrder': 2,
        'valueFilter': 'currency',
      },
      'cumGuidelineAnnPrem': {
        'description': 'GLP Level Accum',
        'sortOrder': 3,
        'valueFilter': 'currency',
      },
      'sevenPayPrem': {
        'description': '7-Pay Premium',
        'sortOrder': 4,
        'valueFilter': 'currency',
      },
      'cumSevenPayPrem': {
        'description': '7-Pay Premium Accum',
        'sortOrder': 5,
        'valueFilter': 'currency',
      },
      'tamraPaidITD': {
        'description': '7-Pay Paid Accum',
        'sortOrder': 6,
        'valueFilter': 'currency',
      },
      'tamraWithdrawnITD': {
        'description': '7-Pay Withdrawn Accum',
        'sortOrder': 7,
        'valueFilter': 'currency',
      },
      'materialChangeDate': {
        'description': 'Material Change Date',
        'sortOrder': 8,
        'valueFilter': 'date:mediumDate',
      },
    },

    'printPolicyContents': {
      'detailedClientSummary': 'detailed-client-summary',
      'detailedAdviserSummary': 'detailed-adviser-summary',
      'defaultSummary': 'defaultSummary',
    },

    'unableToTransferTypes': {
      '-1': 'Fund transfers are currently unavailable.',
      '1': 'Fund transfers are not available. There is a pending transaction.',
      '3': 'Fund transfers are not available. Policy is in {1} Status.',
      '5': 'Fund transfers are not available. {0} is in Free Look period.',
      '6': 'Fund transfers are not available for this {0}.',
      '7': 'Fund transfers are not available. This {0} has unapplied funds.',
      '8': 'Fund transfers are not available. This {0} has an active AAR, DCA, or Systematic Withdrawal.',
      '10': 'Fund transfers are not available. There are no available source funds.',
      '12': 'Fund transfers are not available for this {0}.',
      '13': 'Fund transfers are available to servicing Financial Professionals.',
      '14': 'Fund transfers are not available. There is only one fund available.',
    },

    'unableToRebalanceTypes': {
      '-1': 'Rebalance is currently unavailable.',
      '1': 'Rebalance is not available. There is a pending {2} transaction.',
      '3': 'Rebalance is not available. Policy in {1} Status.',
      '5': 'Rebalance is not available. {0} is in Free Look period.',
      '6': 'Rebalance is not available for this {0}.',
      '7': 'Rebalance is not available. This {0} has unapplied funds.',
      '8': 'Rebalance is not available. This {0} has an active AAR, DCA, or Systematic Withdrawal.',
      '10': 'Rebalance is not available. There are no available source funds.',
      '12': 'Rebalance is not available for this {0}',
      '13': 'Rebalance is available to servicing Financial Professionals.',
      '14': 'Rebalance is not available. There is only one fund available.',
      '15': 'Rebalance is not available for {0} with fixed funds.',
    },

    'unableToAllocateTypes': {
      '-1': 'This feature is not currently available.',
      '1': 'This feature is not currently available. There is a pending {2} transaction.',
      '3': 'This feature is not available. Policy in {1} Status.',
      '5': 'This feature is not available. {0} is in Free Look period.',
      '6': 'This feature is not available for this {0}.',
      '7': 'This feature is not available. This {0} has unapplied funds.',
      '8': 'This feature is not available. This {0} has an active AAR, DCA, or Systematic Withdrawal.',
      '10': 'This feature is not available. There are no available source funds.',
      '12': 'This feature is not available for this {0}',
      '13': 'This feature is available to servicing Financial Professionals.',
      '14': 'This feature is not available. There is only one fund available.',
    },

    'clientUnableToTransferTypes': {
      '-1': 'This feature is not available. Please contact your Financial Professional.',
      '1': 'Fund transfers are not available. There is a pending transaction.',
      '7': 'This feature is not available. Please contact your Financial Professional.',
      '8': 'This feature is not available. Please contact your Financial Professional.',
    },

    'clientUnableToRebalanceTypes': {
      '-1': 'This feature is not available. Please contact your Financial Professional.',
      '1': 'Rebalance is not available. There is a pending {2} transaction.',
      '7': 'This feature is not available. Please contact your Financial Professional.',
      '8': 'This feature is not available. Please contact your Financial Professional.',
    },

    'clientUnableToAllocateTypes': {
      '-1': 'This feature is not available. Please contact your Financial Professional.',
      '1': 'This feature is not currently available. There is a pending {2} transaction.',
      '7': 'This feature is not available. Please contact your Financial Professional.',
      '8': 'This feature is not available. Please contact your Financial Professional.',
    },

    'policyUnableTermConvert': {
      '2': 'The product is not applicable.',
      '3': 'The policy has an invalid status.',
      '9': 'The policy could not be located.',
      '16': 'There are multiple owners.',
      '20': 'The conversion date is in the past.',
      '21': 'The face amount is insufficient.',
      '23': 'The owner\'s resident state is not eligible.',
      '29': 'The owner\'s resident state is not eligible.',
      '22': 'The organization is not an eligible type.',
      '24': 'The insured\'s resident state is not eligible.',
      '25': 'The client could not be found.',
      '26': 'The insured does not have a valid Social Security Number.',
      '27': 'The owner\'s data is incomplete.',
      '28': 'The insured\'s data is incomplete.',
    },
  }


