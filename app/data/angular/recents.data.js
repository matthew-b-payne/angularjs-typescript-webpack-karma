(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('recentsUnitTestData', {
      newPolicy: newPolicy,
      recentPolicyItems: recentPolicyItems,
      recentPolicies: recentPolicies,
    })

  function newPolicy() {
    return {
      'polNumber': '1234567',
      'source': 'inforce',
      'lineOfBusiness': 'Annuity',
      'holdingStatus': 'Active',
      'productType': 'Variable Annuity',
      'carrierCode': 'PML',
      'carrierName': 'The Penn Mutual Life Insurance Company',
      'marketingName': 'Pennant Select',
      'policyStatus': 'Living Benefit Payout',
      'initPaymentAmt': 0.0,
      'paymentAmt': 1.0,
      'annuitants': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person', 'birthDate': '01/04/1951'}],
      'requirementsTotal': 0,
      'lastUpdateDate': '03/15/2018',
      'primaryAgentCode': ['71561'],
      'primaryOfficeCode': ['R40'],
      'primaryServicingAgent': ['Hagerman, William'],
      'splitCase': false,
      'aceIndicator': false,
      'policyValue': 0.0,
      'effDate': '01/24/2011',
      'anniversaryDate': '01/24/2019',
      'netDeathBenefitAmt': 0.0,
      'owner': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person'}],
      'payor': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person'}],
    }
  }

  function recentPolicyItems() {
    return [
      {'source': 'pending', 'polNumber': '0027624580'},
      {'source': 'inforce', 'polNumber': '0085923110'},
      {'source': 'inforce', 'polNumber': '8922814'},
      {'source': 'pending', 'polNumber': '0027624540'},
      {'source': 'inforce', 'polNumber': '0090501890'},
      {'source': 'pending', 'polNumber': '8922981'},
      {'source': 'pending', 'polNumber': '8922982'},
      {'source': 'inforce', 'polNumber': '0083987010'},
      {'source': 'inforce', 'polNumber': '8922975'},
      {'source': 'inforce', 'polNumber': '8926070'},
    ]
  }

  function recentPolicies() {
    return [
      {
        'polNumber': '0027624580',
        'source': 'pending',
        'lineOfBusiness': 'Life',
        'holdingStatus': 'Pending',
        'productType': 'Universal Life',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Protection Guard UL',
        'policyStatus': 'Pending',
        'faceAmt': 1500000.0,
        'hoReceiptDate': '03/16/2018',
        'submitDate': '03/16/2018',
        'insureds': [{'fullName': 'TESTCC, CDD', 'partyType': 'Person', 'birthDate': '02/05/1953'}],
        'requirementsStatus': [{'type': 'Add', 'count': 10}, {'type': 'Order', 'count': 2}, {
          'type': 'Submitted',
          'count': 6,
        }],
        'requirementsTotal': 18,
        'lastUpdateDate': '03/16/2018',
        'primaryAgentCode': ['29981'],
        'primaryOfficeCode': ['V88'],
        'primaryServicingAgent': ['Illoway, Lawrence'],
        'splitCase': false,
        'aceIndicator': false,
        'effDate': '03/16/2018',
        'anniversaryDate': '03/16/2018',
        'owner': [{'fullName': 'TESTCC, CDD', 'partyType': 'Person'}],
        'payor': [{'fullName': 'TESTCC, CDD', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'LAST, FIRST', 'partyType': 'Person'}],
      },
      {
        'polNumber': '0085923110',
        'source': 'inforce',
        'lineOfBusiness': 'Life',
        'holdingStatus': 'Active',
        'productType': 'Variable Universal Life',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Diversified Growth VUL',
        'policyStatus': 'Issued Not Paid',
        'faceAmt': 800000.0,
        'paymentAmt': 7000.0,
        'insureds': [{'fullName': 'AAR, SRQUEUE', 'partyType': 'Person'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '09/15/2017',
        'primaryAgentCode': ['43851'],
        'primaryOfficeCode': ['273'],
        'primaryServicingAgent': ['Depaola, Frank'],
        'splitCase': false,
        'aceIndicator': false,
        'policyValue': 0.0,
        'effDate': '10/10/2016',
        'anniversaryDate': '10/10/2018',
        'netDeathBenefitAmt': 800000.0,
        'owner': [{'fullName': 'SHMOE, JOE', 'partyType': 'Person'}],
        'payor': [{'fullName': 'SHMOE, JOE', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'SHMOE, JOE', 'partyType': 'Person'}],
      },
      {
        'polNumber': '8922814',
        'source': 'inforce',
        'lineOfBusiness': 'Annuity',
        'holdingStatus': 'Active',
        'productType': 'Variable Annuity',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Smart Foundation Advisory Variable Annuity',
        'policyStatus': 'Active (Inforce)',
        'initPaymentAmt': 25000.0,
        'annuitants': [{'fullName': 'ABBY, MOSHER', 'partyType': 'Person', 'birthDate': '09/16/1962'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '03/15/2018',
        'primaryAgentCode': ['94444'],
        'primaryOfficeCode': ['Y55'],
        'primaryServicingAgent': ['Leiser, Evelyn'],
        'splitCase': false,
        'aceIndicator': false,
        'policyValue': 28927.17,
        'effDate': '06/21/2017',
        'anniversaryDate': '06/21/2018',
        'netDeathBenefitAmt': 28927.17,
        'owner': [{'fullName': 'ABBY, MOSHER', 'partyType': 'Person'}],
        'payor': [{'fullName': 'ABBY, MOSHER', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'ABBY JO MOSHER TRUST', 'partyType': 'Organization'}],
      },
      {
        'polNumber': '0027624540',
        'source': 'pending',
        'lineOfBusiness': 'Life',
        'holdingStatus': 'Pending',
        'productType': 'Whole Life',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Guaranteed Choice WL',
        'policyStatus': 'Pending',
        'faceAmt': 770000.0,
        'hoReceiptDate': '03/16/2018',
        'submitDate': '03/16/2018',
        'insureds': [{'fullName': 'Ca, Molly', 'partyType': 'Person', 'birthDate': '11/04/1987'}],
        'requirementsStatus': [{'type': 'Add', 'count': 1}, {'type': 'Received', 'count': 10}],
        'requirementsTotal': 11,
        'lastUpdateDate': '03/16/2018',
        'primaryAgentCode': ['29981'],
        'primaryOfficeCode': ['V88'],
        'primaryServicingAgent': ['Illoway, Lawrence'],
        'splitCase': false,
        'aceIndicator': true,
        'appCode': '8TMB2',
        'effDate': '03/16/2018',
        'anniversaryDate': '03/16/2018',
        'owner': [{'fullName': 'Ca, Molly', 'partyType': 'Person'}],
        'payor': [{'fullName': 'Ca, Molly', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'Ca, June', 'partyType': 'Person'}, {
          'fullName': 'Ca, Henry',
          'partyType': 'Person',
        }],
      },
      {
        'polNumber': '0090501890',
        'source': 'inforce',
        'lineOfBusiness': 'Life',
        'holdingStatus': 'Active',
        'productType': 'Indexed Universal Life',
        'carrierCode': 'PIA',
        'carrierName': 'The Penn Insurance and Annuity Company',
        'marketingName': 'Survivorship Plus IUL',
        'policyStatus': 'Issued Not Paid',
        'faceAmt': 2500000.0,
        'paymentAmt': 12121.0,
        'insureds': [{'fullName': 'Gilbert, Johnathan', 'partyType': 'Person', 'birthDate': '12/12/1980'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '11/13/2017',
        'primaryAgentCode': ['67967'],
        'primaryOfficeCode': ['K84'],
        'primaryServicingAgent': ['Bittner, Seth'],
        'splitCase': false,
        'aceIndicator': false,
        'policyValue': 0.0,
        'effDate': '12/08/2014',
        'anniversaryDate': '12/08/2018',
        'netDeathBenefitAmt': 2500000.0,
        'owner': [{'fullName': 'Gilbert, Johnathan', 'partyType': 'Person'}],
        'payor': [{'fullName': 'Gilbert, Johnathan', 'partyType': 'Person'}],
      },
      {
        'polNumber': '8922981',
        'source': 'pending',
        'lineOfBusiness': 'Annuity',
        'holdingStatus': 'Pending',
        'productType': 'Fixed Annuity',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Single Premium Immediate Annuity',
        'policyStatus': 'Pending Issue',
        'submitDate': '03/15/2018',
        'annuitants': [{'fullName': 'Mecca, Geraldine', 'partyType': 'Person', 'birthDate': '10/24/1937'}],
        'requirementsStatus': [{'type': 'Waived', 'count': 3}],
        'requirementsTotal': 3,
        'lastUpdateDate': '03/15/2018',
        'primaryAgentCode': ['69707'],
        'primaryOfficeCode': ['X31'],
        'primaryServicingAgent': ['COLLINS, BRION'],
        'splitCase': false,
        'aceIndicator': false,
        'effDate': '01/09/2018',
        'anniversaryDate': '01/09/2019',
        'owner': [{'fullName': 'Mecca, Geraldine', 'partyType': 'Person'}],
        'payor': [{'fullName': 'Mecca, Geraldine', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'Mecca, Leonard', 'partyType': 'Person'}],
      },
      {
        'polNumber': '8922982',
        'source': 'pending',
        'lineOfBusiness': 'Annuity',
        'holdingStatus': 'Pending',
        'productType': 'Fixed Annuity',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Single Premium Immediate Annuity',
        'policyStatus': 'Pending Issue',
        'submitDate': '03/15/2018',
        'annuitants': [{'fullName': 'Moeller, Rita', 'partyType': 'Person', 'birthDate': '10/11/1947'}],
        'requirementsStatus': [{'type': 'Add', 'count': 2}],
        'requirementsTotal': 2,
        'lastUpdateDate': '03/15/2018',
        'primaryAgentCode': ['85975'],
        'primaryOfficeCode': ['Z21'],
        'primaryServicingAgent': ['ECKSTEIN, KERRI'],
        'splitCase': false,
        'aceIndicator': false,
        'effDate': '02/22/2018',
        'anniversaryDate': '02/22/2019',
        'owner': [{'fullName': 'Moeller, Rita', 'partyType': 'Person'}],
        'payor': [{'fullName': 'Moeller, Rita', 'partyType': 'Person'}],
        'beneficiary': [{'fullName': 'Sizemore, Jennifer', 'partyType': 'Person'}, {
          'fullName': 'Holt Jr, Richard',
          'partyType': 'Person',
        }],
      },
      {
        'polNumber': '0083987010',
        'source': 'app',
        'lineOfBusiness': 'Life',
        'holdingStatus': 'Active',
        'productType': 'Universal Life',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Protection Builder',
        'policyStatus': 'Active (Inforce)',
        'faceAmt': 100000.0,
        'paymentAmt': 0.0,
        'insureds': [{'fullName': 'AARON, THOMAS', 'partyType': 'Person', 'birthDate': '01/05/1950'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '03/01/2018',
        'primaryAgentCode': ['16702'],
        'primaryOfficeCode': ['100'],
        'primaryServicingAgent': ['Delgreco, James'],
        'splitCase': false,
        'aceIndicator': false,
        'policyValue': 44950.7,
        'effDate': '11/01/2003',
        'anniversaryDate': '11/01/2018',
        'netDeathBenefitAmt': 144950.7,
        'owner': [{'fullName': 'BOILERMAKER LODGE 154 RETIREMENT PLAN', 'partyType': 'Organization'}],
        'payor': [{'fullName': 'BOILERMAKER LODGE 154 RETIREMENT PLAN', 'partyType': 'Organization'}],
        'beneficiary': [{'fullName': 'BOLIERMAKER RETIRE PLAN & MEMBER BENE', 'partyType': 'Organization'}],
      },
      {
        'polNumber': '8922975',
        'source': 'inforce',
        'lineOfBusiness': 'Annuity',
        'holdingStatus': 'Active',
        'productType': 'Variable Annuity',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Enhanced Credit Variable Annuity',
        'policyStatus': 'Active (Inforce)',
        'initPaymentAmt': 73494.32,
        'annuitants': [{'fullName': 'DVORSKY, MARGARET', 'partyType': 'Person', 'birthDate': '01/21/1960'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '03/15/2018',
        'primaryAgentCode': ['83378'],
        'primaryOfficeCode': ['222'],
        'primaryServicingAgent': ['Lear, Jerald'],
        'splitCase': true,
        'aceIndicator': false,
        'policyValue': 0.0,
        'effDate': '09/15/2010',
        'anniversaryDate': '09/15/2018',
        'netDeathBenefitAmt': 0.0,
        'owner': [{'fullName': 'DVORSKY, MARGARET', 'partyType': 'Person'}],
        'payor': [{'fullName': 'DVORSKY, MARGARET', 'partyType': 'Person'}],
      },
      {
        'polNumber': '8926070',
        'source': 'inforce',
        'lineOfBusiness': 'Annuity',
        'holdingStatus': 'Active',
        'productType': 'Variable Annuity',
        'carrierCode': 'PML',
        'carrierName': 'The Penn Mutual Life Insurance Company',
        'marketingName': 'Pennant Select',
        'policyStatus': 'Living Benefit Payout',
        'initPaymentAmt': 0.0,
        'paymentAmt': 1.0,
        'annuitants': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person', 'birthDate': '01/04/1951'}],
        'requirementsTotal': 0,
        'lastUpdateDate': '03/15/2018',
        'primaryAgentCode': ['71561'],
        'primaryOfficeCode': ['R40'],
        'primaryServicingAgent': ['Hagerman, William'],
        'splitCase': false,
        'aceIndicator': false,
        'policyValue': 0.0,
        'effDate': '01/24/2011',
        'anniversaryDate': '01/24/2019',
        'netDeathBenefitAmt': 0.0,
        'owner': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person'}],
        'payor': [{'fullName': 'ABBOTT, LESTER', 'partyType': 'Person'}],
      },
    ]
  }
})()
