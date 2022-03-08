(function() {
  'use strict'

  angular.module('unitTestData')
    .value('policyRequirementsUnitTestData', {
      requirementsResult: requirementsResult,
    })

  function requirementsResult() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'data': {
        'asOfDate': '03/15/2018',
        'submitDate': '01/29/2018',
        'requirements': [
          {
            'reqCode': 'New Application',
            'reqName': 'New Application',
            'reqCodeTC': '1012300060',
            'restrictIssueCode': 'Restricts Approval Cannot Be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-01-31T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_1012300060_10',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Illustration Summary',
            'reqName': 'Illustration Summary',
            'reqCodeTC': '1012300087',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_1012300087_11',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Signed Illustration',
            'reqName': 'Signed Illustration',
            'reqCodeTC': '133',
            'restrictIssueCode': 'No Restrictions',
            'reqStatus': 'Pending',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-01-29T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_133_12',
            'pastDue': false,
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Client ID',
            'reqName': 'Client ID (CLIENTID)',
            'reqCodeTC': '1012300047',
            'restrictIssueCode': 'Restricts Issue and Cannot be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_1012300047_13',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Consent for AIDS-Related Blood Testing',
            'reqName': 'Consent for AIDS-Related Blood Testing',
            'reqCodeTC': '6',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_6_14',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Agent Reply Required - CA Review',
            'reqName': 'Agent Reply Required - CA Review',
            'reqCodeTC': '1012300023',
            'requirementDetails': 'Please provide method of solicitation regarding "no" response to AUR Section A.4.',
            'restrictIssueCode': 'Restricts Issue and Cannot be Overridden',
            'reqStatus': 'Pending',
            'requestedDate': '2018-02-05T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': true,
            'id': '05-01_0027613060_1012300023_15',
            'pastDue': false,
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Agent Reply Required - UW Review',
            'reqName': 'Agent Reply Required - UW Review',
            'reqCodeTC': '155',
            'requirementDetails': 'Please confirm yes or no for Application Section W.10.',
            'restrictIssueCode': 'Restricts Approval Cannot Be Overridden',
            'reqStatus': 'Pending',
            'requestedDate': '2018-02-05T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': true,
            'id': '05-01_0027613060_155_16',
            'pastDue': false,
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Consent for AIDS-Related Blood Testing',
            'reqName': 'Consent for AIDS-Related Blood Testing',
            'reqCodeTC': '6',
            'requirementDetails': 'Please resubmit full HIV Auth; only page 1 was received.',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Pending',
            'requestedDate': '2018-02-05T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_6_17',
            'pastDue': false,
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Obtain Motor Vehicle Report',
            'reqName': 'Obtain Motor Vehicle Report',
            'reqCodeTC': '147',
            'restrictIssueCode': 'Restricts Approval Cannot Be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '02/01/2018',
            'receivedDate': '2018-02-01T05:00:00.000Z',
            'statusDate': '2018-02-01T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_147_2',
            'pastDue': false,
            'receiptDate': '2018-02-01T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Chronic Illness Disclosure Form',
            'reqName': 'Chronic Illness Disclosure Form',
            'reqCodeTC': '1012300007',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_1012300007_4',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Agent Underwriting Report',
            'reqName': 'Agent Underwriting Report',
            'reqCodeTC': '152',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_152_5',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'MIB Check',
            'reqName': 'MIB Check',
            'reqCodeTC': '21',
            'restrictIssueCode': 'Restricts Approval Cannot Be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-01-31T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_21_6',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Life New Business Checklist',
            'reqName': 'Life New Business Checklist',
            'reqCodeTC': '223',
            'restrictIssueCode': 'Restricts Issue and Cannot be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_223_7',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'MIB Authorization',
            'reqName': 'MIB Authorization',
            'reqCodeTC': '23',
            'restrictIssueCode': 'Restricts Approval Cannot Be Overridden',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_23_8',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
          {
            'reqCode': 'Submitted Illustration',
            'reqName': 'Submitted Illustration',
            'reqCodeTC': '247',
            'restrictIssueCode': 'Allows Approval, Prohibits Contract Print',
            'reqStatus': 'Received',
            'requestedDate': '2018-01-29T05:00:00.000Z',
            'fulfilledDate': '01/29/2018',
            'receivedDate': '2018-01-29T05:00:00.000Z',
            'statusDate': '2018-02-05T05:00:00.000Z',
            'relatedParty': {
              'party': 'GAO, WILLIE,  JR',
              'roles': [
                {
                  'role': 'Insured',
                },
                {
                  'role': 'Owner',
                },
                {
                  'role': 'Payer',
                },
              ],
            },
            'lastUpdateDate': '03/15/2018',
            'isRepliable': false,
            'id': '05-01_0027613060_247_9',
            'pastDue': false,
            'receiptDate': '2018-01-29T05:00:00.000Z',
            'appliesTo': 'Insured: GAO, WILLIE,  JR',
          },
        ],
        'requirementsStatus': [
          {
            'type': 'Received',
            'count': 11,
          },
          {
            'type': 'Pending',
            'count': 4,
          },
        ],
        'requirementsTotal': 15,
        'policyNumber': '0027613060',
        'insuredName': 'GAO, WILLIE',
        'ownerName': 'GAO, WILLIE',
        'advisorName': 'Kwong, Richard',
        'marketingName': 'Protection Guard UL',
        'requirementInfo': {
          'label': '11/15',
          'percentage': '73%',
        },
      },
      'polNumber': '0027613060',
    }
  }
})()
