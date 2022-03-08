
(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('clientData', {
      'myPolicies': myPolicies,
      'whoami': whoami,
      'actions': actions,
    })

  function myPolicies() {
    return {
      policies: [{
        'polNumber': '0084009020',
        'source': 'inforce',
        'lineOfBusiness': 'Life',
        'productType': 'Universal Life',
        'marketingName': 'Guaranteed Protection UL',
        'policyStatus': 'Active (Inforce)',
        'holdingStatus': 'Active',
        'faceAmt': 900000,
        'deathBenefitAmt': 900000,
        'grossDeathBenefitAmt': 900000,
        'netDeathBenefitAmt': 900000,
        'policyValue': 9060.28,
        'netSurrValueAmt': 5097.35,
        'effDate': '2018-02-01T05:00:00.000Z',
        'paymentAmt': 2200,
        'paymentDueDate': '2020-02-01T05:00:00.000Z',
        'insureds': [
          {
            'fullName': 'BENCHMARK, MARY',
            'partyType': 'Person',
            'firstName': 'MARY',
            'lastName': 'BENCHMARK',
            'registered': false,
          },
        ],
        'coverageInsureds': [
          {
            'fullName': 'BENCHMARK, LAUREN',
            'partyType': 'Person',
            'firstName': 'LAUREN',
            'lastName': 'BENCHMARK',
            'registered': false,
          },
          {
            'fullName': 'BENCHMARK, DON',
            'partyType': 'Person',
            'firstName': 'DON',
            'lastName': 'BENCHMARK',
            'registered': false,
          },
        ],
        'owners': [
          {
            'fullName': 'BENCHMARK, MARY',
            'partyType': 'Person',
            'firstName': 'MARY',
            'lastName': 'BENCHMARK',
            'registered': false,
          },
        ],
        'payors': [
          {
            'fullName': 'BENCHONE, BUCKS',
            'partyType': 'Person',
            'firstName': 'BUCKS',
            'lastName': 'BENCHONE',
            'registered': false,
          },
        ],
        'beneficiaries': [
          {
            'fullName': 'BELLA BENCHMARK',
            'partyType': 'Person',
            'firstName': 'BELLA',
            'lastName': 'BENCHMARK',
            'benerelationship': 'Trust',
            'registered': false,
          },
        ],
        'primaryAgentCode': [
          '91111',
        ],
        'primaryOfficeCode': [
          'A50',
        ],
        'primaryAgentStatus': 'Active',
        'primaryServicingAgent': [
          'Gimbel, Hunter',
        ],
        'primaryOfficeName': 'Kane Agency',
        'primaryAgentDistributionChannel': 'CAS',
        'restrictionCode': {
          'value': 'No Restrictions',
          'tc': '1',
        },
        'asOfDate': '02/01/2019',
        'aceIndicator': false,
        'assignmentCode': {
          'value': 'This policy is not assigned',
          'tc': '1',
        },
        'type': 'inforce',
        'isAnnuity': false,
        'insured': {
          'fullName': 'MARY BENCHMARK, +2',
          'isMultiple': true,
          'isAnOrganization': false,
        },
        'owner': {
          'fullName': 'MARY BENCHMARK',
          'isMultiple': false,
          'isAnOrganization': false,
        },
        'payor': {
          'fullName': 'BUCKS BENCHONE',
          'isMultiple': false,
          'isAnOrganization': false,
        },
        'beneficiary': {
          'fullName': 'BELLA BENCHMARK',
          'isMultiple': false,
          'isAnOrganization': false,
        },
        'anniversaryDate': '2019-02-01T05:00:00.000Z',
        'lastUpdateDate': '2019-02-01T05:00:00.000Z',
        'paymentAmountValue': 900000,
        'advisorFullName': 'Gimbel, Hunter',
        'isULProductType': true,
      }],
      count: 129,
      states: [
        {
          state: {
            value: 'New York',
            tc: '37',
          },
          count: 19,
        },
        {
          state: {
            value: 'Pennsylvania',
            tc: '45',
          },
          count: 15,
        },
      ],
      companies: [
        {
          company: 'PML',
          count: 127,
        },
        {
          company: 'PNY',
          count: 2,
        },
      ],
      oldestEffectveDate: '01/05/1944',
      lifePolicies: true,
      annuityPolicies: false,
    }
  }

  function whoami() {
    return {
      fullName: 'Universallife Inforce',
      partyType: 'Unknown',
      firstName: 'Universallife',
      lastName: 'Inforce',
      birthDate: '08/16/1995',
      registered: false,
    }
  }

  function actions() {
    return {
      actions: [
        {
          pid: '0090012200',
          actions: [
            {
              value: 'Initial Payment',
              tc: '7',
            },
          ],
        },
        {
          pid: '0083292000',
          actions: [
            {
              value: 'Premium Payment',
              tc: '1',
            },
          ],
        },
        {
          pid: '0083458580',
          actions: [
            {
              value: 'Premium Payment',
              tc: '1',
            },
          ],
        },
      ],
    }
  }
})()
