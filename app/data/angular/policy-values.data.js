(function() {
  'use strict'

  angular.module('unitTestData')
    .value('policyValuesUnitTestData', {
      maxLoanQuote: maxLoanQuote,
      policyBaseResult: policyBaseResult,
      policyValuesResult: policyValuesResult,
    })

  function maxLoanQuote() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'policyLoanQuotes': [
        {
          'loanType': {
            'tc': '1',
            'value': 'Traditional Loan',
          },
          'loanInterestRate': '1.234%',
          'maxLoan': 12345.67,
        },
        {
          'loanType': {
            'tc': '2',
            'value': 'Indexed Loan',
          },
          'loanInterestRate': '4.321%',
          'maxLoan': 76543.21,
        },
      ],
    }
  }

  function policyBaseResult() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'policyBase': {
        'polNumber': '0027064390',
        'lineOfBusiness': 'Life',
        'productType': 'Whole Life',
        'productCode': 'GCWL(14)',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Guaranteed Choice WL',
        'policyStatus': 'Active (Inforce)',
        'jurisdiction': 'California',
        'policyValue': 6276,
        'effDate': '06/06/2016',
        'issueDate': '06/07/2016',
        'termDate': '06/06/2073',
        'paidToDate': '06/06/2018',
        'billedToDate': '06/06/2018',
        'billingStopDate': '06/06/2052',
        'paymentMode': 'Annual',
        'paymentAmt': 61648.27,
        'annualPaymentAmt': 61648.27,
        'paymentMethod': 'Regular Billing',
        'paymentDueDate': '06/06/2018',
        'qualPlanType': 'Non-Qualified',
        'premDurationDate': '06/06/2052',
        'payToAge': 100,
        'premOffsetMethod': 'None',
        'targetPremAmt': 64360.8,
        'totCumPremAmt': 0,
        'cumMinPremAmt': 0,
        'minPremAmt': 61648.27,
        'faceAmt': 624476,
        'divType': 'Paid-Up Additions',
        'divPUA': 0,
        'divOnDepositAmt': 0,
        'divOnDepositIntAmt': 0,
        'deemedCashValueAmt': 0,
        'deemedFaceAmt': 1873428,
        'maxAvailableLoan': 0,
        'materialChangeDate': '06/06/2016',
        'matChangeAV': 0,
        'mecInd': false,
        'sevenPayPrem': 164784.62,
        'cumSevenPayPrem': 329569.24,
        'mEC1035': false,
        'unnecGSP': 0,
        'highAvgAmtsPaid': 99999.99,
        'tamraSumPremsITD': 199999.98,
        'assignmentCode': 'This policy is not assigned',
        'restrictionCode': 'No Restrictions',
        'qualifiedCode': 'Non-Qualified',
        'lastFinActivityDate': '06/06/2017',
        'lastNonFinActivityDate': '06/23/2017',
        'puaDBAmtFromPremITD': 215501.32,
        'puaInsideDBAmtFromBaseDivITD': 0,
        'puaInsideDBAmtFromBIRPremITD': 81913.79,
        'puaInsideDBAmtFromBIRDivITD': 1047.3,
        'puaInsideDBAmtFromPUAPremITD': 133587.53,
        'puaInsideDBAmtFromPUADivITD': 1705.74,
        'puaOutsideDBAmtFromPUAPremITD': 0,
        'puaOutsideDBAmtFromPUADivITD': 0,
        'puaCashValueTotalAmt': 111964,
        'puaDBTotalAmtITD': 218254.36,
        'loanAmt': 0,
        'loanBalance': 0,
        'loanIntDue': 0,
        'oytDBRefundAmt': 0,
        'oytPurchaseAmt': 0,
        'dbDivDepPostMortDivAmt': 2371.89,
        'dbPremRefundAmt': 15412.07,
        'premiumDueAmt': 0,
        'dbInterestAmt': 0,
        'assignemtnCode': 'This policy is not assigned',
        'deathBenefitAmt': 1875799.88,
        'grossDeathBenefitAmt': 1875799.88,
        'asOfDate': '02/08/2018',
        'lastPremAmount': 61648.27,
        'lastPremDate': '06/06/2017',
      },
    }
  }

  function policyValuesResult() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'policyBase': {},
      'policyValues': {
        'deathbenefit': {
          'pUADBTotalAmtITD': 218254.36,
          'dBDivDepPostMortDivAmt': 2371.89,
          'baseDeathBenefitAmt': 624476,
          'riders': [
            {
              'riderName': 'Flexible Protection Rider',
              'riderDBAmt': 1030697.63,
            },
          ],
          'deathBenefitAmt': 1875799.88,
          'netDeathBenefitAmt': 1891211.95,
          'dBPremRefundAmt': 15412.07,
        },
        'cashsurrendervalue': {
          'policyValue': 6276,
          'surrenderChargeAmt': 0,
          'netSurrenderValue': 138789.42,
          'pUACashValueTotalAmt': 111964,
          'premiumRefundAmt': 20549.42,
        },
        'faceamount': 624476,
      },
    }
  }
})()
