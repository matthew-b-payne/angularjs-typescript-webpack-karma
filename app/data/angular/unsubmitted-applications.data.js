;(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('unsubmittedApplications', {
      unsubmittedApplications: unsubmittedApplications,
    })

  function unsubmittedApplications() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'data': {
        'arrangement': [
          {
            'arrType': 'Standing Allocation',
            'arrSubType': 'Subsequent Premium Allocation',
            'arrangementKey': '01',
            'startDate': '01/30/2015',
            'arrDestination': [
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Eaton Vance Large Core Value',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'PMAM Limited Maturity Bond',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'American Century Mid Core Value',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Loomis Sayles Large Cap Value Fund',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Goldman Sachs Asset Management SMID Cap Growth',
                'excludeInd': 'False',
                'transferPct': 20,
              },
            ],
          },
          {
            'arrType': 'Asset Reallocation',
            'arrSubType': 'Standard Asset Rebalancing',
            'arrangementKey': '01',
            'arrStatus': 'Active',
            'nextActivityDate': '06/30/2017',
            'startDate': '03/31/2015',
            'arrDestination': [
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Eaton Vance Large Core Value',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'PMAM Limited Maturity Bond',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'American Century Mid Core Value',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Loomis Sayles Large Cap Value Fund',
                'excludeInd': 'False',
                'transferPct': 20,
              },
              {
                'transferAmtType': 'Percentage',
                'subAcctName': 'Goldman Sachs Asset Management SMID Cap Growth',
                'excludeInd': 'False',
                'transferPct': 20,
              },
            ],
            'arrMode': 'Quarterly',
            'endDate': '10/27/2047',
          },
        ],
        'newArrangement': {
          'annuityAAR': 'Active',
          'systematicWithdrawal': 'No',
          'annuityDCA': 'No',
        },
      },
    }
  }
})()
