
(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('clientListSampleData', clientListSampleData())

  function clientListSampleData() {
    return {
      'page1Size20NoFiltersSortedOwner': {
        'policies': [
          {
            'polNumber': 'IND8411126',
            'source': 'rps',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Annuity Payout',
            'aceIndicator': false,
            'anniversaryDate': '01/23/2021',
            'annuitants': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
                'birthDate': '02/03/1952',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '01/23/2008',
            'formalAppInd': true,
            'lastUpdateDate': '03/04/2020',
            'marketingName': 'Annuity Certain with Life Income',
            'owner': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
              },
            ],
            'payouts': [
              {
                'nextPayout': '01/23/2008',
                'payoutAmount': 641.95,
                'payoutMode': 'Monthly',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
          },
          {
            'polNumber': '0085959170',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Universal Life',
            'aceIndicator': false,
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'MACHADO, LOURDES',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '07/12/2018',
            'faceAmt': 2000000.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
                'birthDate': '05/23/1962',
              },
            ],
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversified Growth VUL',
            'netDeathBenefitAmt': 2112754.96,
            'owner': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 130000.0,
            'payor': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'policyValue': 112754.96,
            'primaryAgentCode': [
              '*',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Daniel',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8404671',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/07/2020',
            'annuitants': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
                'birthDate': '06/17/1957',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/07/1999',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIBRALTAR REALTY & MANAGEMENT INC',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': 'c5ca6358-44b3-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': '537DU',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/20/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
          },
          {
            'polNumber': '2e0fa7ee-44b4-11e8-bca7-00505689218f',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'UP3CX',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/20/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
          },
          {
            'polNumber': '94530f12-584c-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Application Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': '4XW8L',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 660,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'lastUpdateDate': '05/15/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '05/15/2018',
          },
          {
            'polNumber': 'bcb436e4-44b0-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Application Expired',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'UHFYN',
            'appExpiryDate': '07/24/2018',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'daysToExpire': 0,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '09/14/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
            'lifeHealthCompleted': '04/26/2018',
          },
          {
            'polNumber': '79d9a25c-48b0-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'XTBFC',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 680,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/25/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/25/2018',
          },
          {
            'polNumber': 'd13d28da-94ce-11e8-9bd4-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'AP4X2',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 583,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '07/31/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '07/31/2018',
          },
          {
            'polNumber': '8409510',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/24/2020',
            'annuitants': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
                'birthDate': '10/12/1966',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/24/2001',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIL ARONSON MD PA  SIMPLE IRA',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
        ],
        'numFound': 624,
        'numPages': 63,
      },
      'page1Size10NoFiltersSortedOwner': {
        'policies': [
          {
            'polNumber': 'IND8411126',
            'source': 'rps',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Annuity Payout',
            'aceIndicator': false,
            'anniversaryDate': '01/23/2021',
            'annuitants': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
                'birthDate': '02/03/1952',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '01/23/2008',
            'formalAppInd': true,
            'lastUpdateDate': '03/04/2020',
            'marketingName': 'Annuity Certain with Life Income',
            'owner': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
              },
            ],
            'payouts': [
              {
                'nextPayout': '01/23/2008',
                'payoutAmount': 641.95,
                'payoutMode': 'Monthly',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
          },
          {
            'polNumber': '0085959170',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Universal Life',
            'aceIndicator': false,
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'MACHADO, LOURDES',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '07/12/2018',
            'faceAmt': 2000000.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
                'birthDate': '05/23/1962',
              },
            ],
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversified Growth VUL',
            'netDeathBenefitAmt': 2112754.96,
            'owner': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 130000.0,
            'payor': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'policyValue': 112754.96,
            'primaryAgentCode': [
              '*',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Daniel',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8404671',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/07/2020',
            'annuitants': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
                'birthDate': '06/17/1957',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/07/1999',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIBRALTAR REALTY & MANAGEMENT INC',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': 'c5ca6358-44b3-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': '537DU',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/20/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
          },
          {
            'polNumber': '2e0fa7ee-44b4-11e8-bca7-00505689218f',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'UP3CX',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/20/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
          },
          {
            'polNumber': '94530f12-584c-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Application Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': '4XW8L',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 660,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'lastUpdateDate': '05/15/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '05/15/2018',
          },
          {
            'polNumber': 'bcb436e4-44b0-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Application Expired',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'UHFYN',
            'appExpiryDate': '07/24/2018',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 685,
            'daysToExpire': 0,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '09/14/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/20/2018',
            'lifeHealthCompleted': '04/26/2018',
          },
          {
            'polNumber': '79d9a25c-48b0-11e8-b59b-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'XTBFC',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 680,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '04/25/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '04/25/2018',
          },
          {
            'polNumber': 'd13d28da-94ce-11e8-9bd4-0050568906de',
            'source': 'app',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Application Started',
            'policyStatus': 'Life and Health Started',
            'productType': 'Application',
            'aceIndicator': true,
            'appCode': 'AP4X2',
            'applicationSource': {
              'value': 'Porch',
              'tc': '1',
            },
            'daysOpen': 583,
            'formalAppInd': true,
            'hasIllustration': false,
            'insureds': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
                'birthDate': '02/11/1969',
              },
            ],
            'lastUpdateDate': '07/31/2018',
            'owner': [
              {
                'fullName': 'Aniston, Jennifer',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
            'startDate': '07/31/2018',
          },
          {
            'polNumber': '8409510',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/24/2020',
            'annuitants': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
                'birthDate': '10/12/1966',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/24/2001',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIL ARONSON MD PA  SIMPLE IRA',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
        ],
        'numFound': 624,
        'numPages': 63,
      },
      'page1Size10FilterHoldingStatusActiveSortedOwner': {
        'policies': [
          {
            'polNumber': 'IND8411126',
            'source': 'rps',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Annuity Payout',
            'aceIndicator': false,
            'anniversaryDate': '01/23/2021',
            'annuitants': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
                'birthDate': '02/03/1952',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '01/23/2008',
            'formalAppInd': true,
            'lastUpdateDate': '03/04/2020',
            'marketingName': 'Annuity Certain with Life Income',
            'owner': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
              },
            ],
            'payouts': [
              {
                'nextPayout': '01/23/2008',
                'payoutAmount': 641.95,
                'payoutMode': 'Monthly',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
          },
          {
            'polNumber': '0085959170',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Universal Life',
            'aceIndicator': false,
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'MACHADO, LOURDES',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '07/12/2018',
            'faceAmt': 2000000.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
                'birthDate': '05/23/1962',
              },
            ],
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversified Growth VUL',
            'netDeathBenefitAmt': 2112754.96,
            'owner': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 130000.0,
            'payor': [
              {
                'fullName': 'ALBERTO PARDO, JAIME',
                'partyType': 'Person',
              },
            ],
            'policyValue': 112754.96,
            'primaryAgentCode': [
              '*',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Daniel',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8404671',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/07/2020',
            'annuitants': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
                'birthDate': '06/17/1957',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/07/1999',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ALCOSSER, LISA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIBRALTAR REALTY & MANAGEMENT INC',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': '8409510',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '12/24/2020',
            'annuitants': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
                'birthDate': '10/12/1966',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '12/24/2001',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'ARONSON, TAMMAR',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GIL ARONSON MD PA  SIMPLE IRA',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '0085649830',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Universal Life',
            'aceIndicator': false,
            'anniversaryDate': '03/03/2020',
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'ANAYA B ARUCA C/O DIANA NAVARRO, UTMA',
                'partyType': 'Organization',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '03/03/2003',
            'faceAmt': 500000.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'ARUCA, DANIEL',
                'partyType': 'Person',
                'birthDate': '09/04/1974',
              },
            ],
            'lastUpdateDate': '03/03/2020',
            'marketingName': 'Cornerstone VUL III',
            'netDeathBenefitAmt': 780859.88,
            'owner': [
              {
                'fullName': 'ARUCA, DANIEL',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 15000.0,
            'payor': [
              {
                'fullName': 'ARUCA, DANIEL',
                'partyType': 'Person',
              },
            ],
            'policyValue': 280859.88,
            'primaryAgentCode': [
              '32183',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Daniel',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8936761',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '06/19/2020',
            'annuitants': [
              {
                'fullName': 'ATOCHE, JESSICA',
                'partyType': 'Person',
                'birthDate': '08/02/1972',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '06/19/2012',
            'formalAppInd': true,
            'initPaymentAmt': 120.0,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Retirement Planner VA',
            'owner': [
              {
                'fullName': 'ATOCHE, JESSICA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'DANIEL DIEZ MD PA SIMPLE',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8933867',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '01/17/2021',
            'annuitants': [
              {
                'fullName': 'BEHAR, ISAAC',
                'partyType': 'Person',
                'birthDate': '06/03/1955',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '01/17/2012',
            'formalAppInd': true,
            'initPaymentAmt': 25000.0,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Enhanced Credit Variable Annuity',
            'owner': [
              {
                'fullName': 'BEHAR, ISAAC',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'BEHAR, ISAAC',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8407176',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '10/03/2020',
            'annuitants': [
              {
                'fullName': 'BEHAR, SARA',
                'partyType': 'Person',
                'birthDate': '10/07/1958',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '10/03/2000',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'BEHAR, SARA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'BEHAR, SARA',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': '0090260040',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Indexed Universal Life',
            'aceIndicator': false,
            'anniversaryDate': '09/23/2020',
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'BENCHMARK, BELLA',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PIA',
            'carrierName': 'The Penn Insurance and Annuity Company',
            'effDate': '09/23/2017',
            'faceAmt': 300777.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'BENCHMARK, DUSTIN',
                'partyType': 'Person',
                'birthDate': '05/12/1954',
              },
            ],
            'lastUpdateDate': '02/24/2020',
            'marketingName': 'Survivorship Plus Select IUL',
            'netDeathBenefitAmt': 300777.0,
            'owner': [
              {
                'fullName': 'BENCHMARK, DUSTIN',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 4600.0,
            'payor': [
              {
                'fullName': 'BUCKS, RICH',
                'partyType': 'Person',
              },
            ],
            'policyValue': 9130.47,
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '0090047100',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Indexed Universal Life',
            'aceIndicator': false,
            'anniversaryDate': '05/10/2020',
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'BENCHMARK, BELLA',
              },
              {
                'fullName': 'BELLA BENCHMARK',
              },
            ],
            'carrierCode': 'PIA',
            'carrierName': 'The Penn Insurance and Annuity Company',
            'effDate': '05/10/2018',
            'faceAmt': 300888.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'BENCHMARK, DUSTIN',
                'partyType': 'Person',
                'birthDate': '05/25/1952',
              },
            ],
            'lastUpdateDate': '02/10/2020',
            'marketingName': 'Survivorship Plus Select IUL',
            'netDeathBenefitAmt': 300888.0,
            'owner': [
              {
                'fullName': 'BENCHMARK, DUSTIN',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 1000.0,
            'payor': [
              {
                'fullName': 'BUCKS, RICH',
                'partyType': 'Person',
              },
            ],
            'policyValue': 11163.28,
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
        ],
        'numFound': 327,
        'numPages': 33,
      },
      'page1Size10FilterHoldingStatusActiveProductTypeAnnuityPayout': {
        'policies': [
          {
            'polNumber': 'IND8411126',
            'source': 'rps',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Annuity Payout',
            'aceIndicator': false,
            'anniversaryDate': '01/23/2021',
            'annuitants': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
                'birthDate': '02/03/1952',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '01/23/2008',
            'formalAppInd': true,
            'lastUpdateDate': '03/04/2020',
            'marketingName': 'Annuity Certain with Life Income',
            'owner': [
              {
                'fullName': 'ADAMS JR, RICHARD',
                'partyType': 'Person',
              },
            ],
            'payouts': [
              {
                'nextPayout': '01/23/2008',
                'payoutAmount': 641.95,
                'payoutMode': 'Monthly',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'splitCase': false,
          },
        ],
        'numFound': 1,
        'numPages': 1,
      },
      'page1Size10SortAnniversaryDate': {
        'policies': [
          {
            'polNumber': '8030356',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '03/03/2021',
            'annuitants': [
              {
                'fullName': 'FLATTO, CAROL L',
                'partyType': 'Person',
                'birthDate': '05/24/1956',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '03/03/1997',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'FLATTO, CAROL L',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'FLATTO, CAROL L',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8487889',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/28/2021',
            'annuitants': [
              {
                'fullName': 'PRIETO, CHRISTIAN',
                'partyType': 'Person',
                'birthDate': '12/08/1978',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/28/2007',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Retirement Planner VA',
            'owner': [
              {
                'fullName': 'PRIETO, CHRISTIAN',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'DAVID E NEWMAN PA SIMPLE PLAN',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': '8487866',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/27/2021',
            'annuitants': [
              {
                'fullName': 'BOBADILLA, ROSAIDA',
                'partyType': 'Person',
                'birthDate': '06/29/1981',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/27/2007',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Retirement Planner VA',
            'owner': [
              {
                'fullName': 'BOBADILLA, ROSAIDA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'DAVID E NEWMAN PA SIMPLE PLAN',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': true,
          },
          {
            'polNumber': '8950813',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/25/2021',
            'annuitants': [
              {
                'fullName': 'REYES, JOSHUA',
                'partyType': 'Person',
                'birthDate': '11/08/1994',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/25/2015',
            'formalAppInd': true,
            'initPaymentAmt': 100.0,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Retirement Planner VA',
            'owner': [
              {
                'fullName': 'REYES, JOSHUA',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'DANIEL DIEZ MD PA SIMPLE',
                'partyType': 'Organization',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8030436',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Fixed Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/24/2021',
            'annuitants': [
              {
                'fullName': 'RAU, WILLIAM D',
                'partyType': 'Person',
                'birthDate': '06/18/1959',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/24/1997',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'RAU, WILLIAM D',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'RAU, WILLIAM D',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '8951016',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/24/2021',
            'annuitants': [
              {
                'fullName': 'RYDER, MARGARET',
                'partyType': 'Person',
                'birthDate': '11/27/1949',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/24/2015',
            'formalAppInd': true,
            'initPaymentAmt': 35010.74,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Smart Foundation Plus Variable Annuity',
            'owner': [
              {
                'fullName': 'RYDER, MARGARET',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'RYDER, MARGARET',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '7671797',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/21/2021',
            'annuitants': [
              {
                'fullName': 'GOLDFADEN, GARY L',
                'partyType': 'Person',
                'birthDate': '11/19/1942',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/21/1989',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'GOLDFADEN, GARY L',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'GOLDFADEN, GARY L',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '0091507940',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Indexed Universal Life',
            'aceIndicator': false,
            'anniversaryDate': '02/21/2021',
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'USA, ANYONE',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PIA',
            'carrierName': 'The Penn Insurance and Annuity Company',
            'effDate': '02/21/2006',
            'faceAmt': 200000.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'STATEMENT, BETTY',
                'partyType': 'Person',
                'birthDate': '08/15/1970',
              },
            ],
            'lastUpdateDate': '02/21/2020',
            'marketingName': 'Accumulation Builder IUL',
            'netDeathBenefitAmt': 202902.04,
            'owner': [
              {
                'fullName': 'STATEMENT, BETTY',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 500.0,
            'payor': [
              {
                'fullName': 'STATEMENT, BETTY',
                'partyType': 'Person',
              },
            ],
            'policyValue': 2902.04,
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '0082848150',
            'source': 'inforce',
            'lineOfBusiness': 'Life',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Whole Life',
            'aceIndicator': false,
            'anniversaryDate': '02/15/2021',
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'beneficiary': [
              {
                'fullName': 'MARTINEZ, RICARDO',
                'partyType': 'Person',
              },
            ],
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/15/2012',
            'faceAmt': 242355.0,
            'formalAppInd': true,
            'insureds': [
              {
                'fullName': 'MARTINEZ, ALEXANDRA',
                'partyType': 'Person',
                'birthDate': '03/04/1973',
              },
            ],
            'lastUpdateDate': '02/18/2020',
            'marketingName': 'Flexible Choice Whole Life',
            'netDeathBenefitAmt': 298401.95,
            'owner': [
              {
                'fullName': 'MARTINEZ, ALEXANDRA',
                'partyType': 'Person',
              },
            ],
            'paymentAmt': 365.96,
            'payor': [
              {
                'fullName': 'MARTINEZ, ALEXANDRA',
                'partyType': 'Person',
              },
            ],
            'policyValue': 25044.0,
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
          {
            'polNumber': '7904723',
            'source': 'inforce',
            'lineOfBusiness': 'Annuity',
            'holdingStatus': 'Active',
            'policyStatus': 'Active (Inforce)',
            'productType': 'Variable Annuity',
            'aceIndicator': false,
            'anniversaryDate': '02/15/2021',
            'annuitants': [
              {
                'fullName': 'SIMON, EDWARD B',
                'partyType': 'Person',
                'birthDate': '07/31/1944',
              },
            ],
            'assignmentCode': {
              'value': 'This policy is not assigned',
              'tc': '1',
            },
            'carrierCode': 'PML',
            'carrierName': 'The Penn Mutual Life Insurance Company',
            'effDate': '02/15/1994',
            'formalAppInd': true,
            'lastUpdateDate': '01/14/2020',
            'marketingName': 'Diversifier II',
            'owner': [
              {
                'fullName': 'SIMON, EDWARD',
                'partyType': 'Person',
              },
            ],
            'payor': [
              {
                'fullName': 'SIMON, EDWARD',
                'partyType': 'Person',
              },
            ],
            'primaryAgentCode': [
              '98560',
            ],
            'primaryOfficeCode': [
              '016',
            ],
            'primaryServicingAgent': [
              'Finkle, Arthur',
            ],
            'requirementsTotal': 0,
            'restrictionCode': {
              'value': 'No Restrictions',
              'tc': '1',
            },
            'splitCase': false,
          },
        ],
        'numFound': 624,
        'numPages': 63,
      },
      'getKitchenSinkResult': {'data': [{'polNumber': 'IND8411126', 'source': 'rps', 'lineOfBusiness': 'Annuity', 'holdingStatus': 'Active', 'policyStatus': 'Active (Inforce)', 'productType': 'Annuity Payout', 'aceIndicator': false, 'anniversaryDate': '01/23/2021', 'annuitants': [{'fullName': 'ADAMS JR, RICHARD', 'partyType': 'Person', 'birthDate': '02/03/1952'}], 'carrierCode': 'PML', 'carrierName': 'The Penn Mutual Life Insurance Company', 'effDate': '01/23/2008', 'formalAppInd': true, 'lastUpdateDate': '03/04/2020', 'marketingName': 'Annuity Certain with Life Income', 'owner': [{'fullName': 'ADAMS JR, RICHARD', 'partyType': 'Person'}], 'payouts': [{'nextPayout': '01/23/2008', 'payoutAmount': 641.95, 'payoutMode': 'Monthly'}], 'primaryAgentCode': ['98560'], 'primaryOfficeCode': ['016'], 'primaryServicingAgent': ['Finkle, Arthur'], 'requirementsTotal': 0, 'splitCase': false}], 'totalItems': 1, 'totalPages': 1},
      'productTypes': {'counts': [{'value': 'Application', 'valueTypeCode': {'value': 'Application', 'tc': '12'}, 'count': 224}, {'value': 'Variable Annuity', 'valueTypeCode': {'value': 'Variable Annuity', 'tc': '10'}, 'count': 119}, {'value': 'Universal Life', 'valueTypeCode': {'value': 'Universal Life', 'tc': '3'}, 'count': 115}, {'value': 'Whole Life', 'valueTypeCode': {'value': 'Whole Life', 'tc': '1'}, 'count': 101}, {'value': 'Variable Universal Life', 'valueTypeCode': {'value': 'Variable Universal Life', 'tc': '4'}, 'count': 91}, {'value': 'Indexed Universal Life', 'valueTypeCode': {'value': 'Indexed Universal Life', 'tc': '5'}, 'count': 38}, {'value': 'Term', 'valueTypeCode': {'value': 'Term', 'tc': '2'}, 'count': 30}, {'value': 'Fixed Annuity', 'valueTypeCode': {'value': 'Fixed Annuity', 'tc': '9'}, 'count': 8}, {'value': 'Annuity Payout', 'valueTypeCode': {'value': 'Annuity Payout', 'tc': '1012300001'}, 'count': 1}]},
      'holdingStatusTypes': [
        {source: 'All', name: 'Active, Issue Not Paid, Pending, Apps Started', id: [1, 1012300004, 3, 1012300001]},
        {source: 'Inforce', name: 'Active', id: [1]},
        {source: 'Inforce', name: 'Inactive', id: [2]},
        {source: 'Inforce', name: 'Issued Not Paid', id: [1012300004]},
        {source: 'Inforce', name: 'Suspended', id: [4]},
        {source: 'Pending', name: 'Closed', id: [1012300006]},
        {source: 'Pending', name: 'Issued', id: [1012300005]},
        {source: 'Pending', name: 'Issued Paid', id: [1012300007]},
        {source: 'Pending', name: 'Pending', id: [3]},
        {source: 'Apps', name: 'Archived', id: [1012300008]},
        {source: 'Apps', name: 'Completed', id: [1012300002]},
        {source: 'Apps', name: 'Started', id: [1012300001]},
        {source: 'Apps', name: 'Terminated', id: [1012300003]},
      ],
    }
  }
})()
