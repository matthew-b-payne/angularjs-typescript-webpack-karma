(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('addressChangeUnitTestData', {
      multipleAddresses: multipleAddresses,
      oneAddress: oneAddress,
      selectedRolesArray: selectedRolesArray,
    })

  function multipleAddresses() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'data': {
        'addressPolicies': [
          {
            'address': {
              'line1': 'C/O BOB ON SPIFFY LN',
              'line2': '600 DRESHER RD',
              'city': 'HORSHAM',
              'state': 'PA',
              'zip5': '19044',
              'zip4': '2204',
              'addressTypeCode': {
                'value': 'Primary',
                'tc': '1012300001',
              },
              'addressCountry': {
                'value': 'United States of America',
                'tc': '1',
              },
            },
            'policyClients': [
              {
                'pid': '0081964000',
                'marketingName': 'Guaranteed Term 10-15-20',
                'partyRoles': [
                  {
                    'name': 'TONYA ABERNATHY',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'HZLB8uT3gvknGiWssQ2x%2FDOOtSeU716%2F0qRmcyhNBlkfGQSMTq1%2Fk864Ww9QpFFnpmsOhMj1PiRvi9yId2JlGQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Insured',
                        'tc': '32',
                        'clientPolicyRoleId': 'iZtCxo8OxW1CB1F03Ytrfds9RiuMcuPFjVKdiLlRv0Ael%2FCxdYIQBEimwlp0g%2B5z6xs4vjUvf0Q56SQZx%2FAjNQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qPGik2%2F9ymUKN46vTdv2%2FDULPhRO%2FBCD7Z1d3pH53xLB3zYgME6qyxAq%2FQcgodDr9zP9aIg7khg%2B8d7KX1P9_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081768070',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'TONYA ABERNATHY',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'Qubo9XNv%2FVVSjcHGyzy7QQ67Ew4lV1aVwhZG6m6SjBetqxwxnHDgr1Z1zdQ1khb2jGp%2BCSDCcWUuTAYnbpsBTg%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qLUxe%2FioshMyWfGgbOby6QQl6A8RGULsTZtWZ8WwA8E25mEj76l6cmorV6pSArjS3Mz1GnL3di20OI6GfQ1a_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081767960',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'TONYA ABERNATHY',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': '9s%2F7fzIPfpGmmlPcM7KH7Lu%2BhalBELVmkTOvhwv70U%2FErdDcI9dU2r3wvj6ZPMSkDESjIIloae0a60gmxkn96g%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'pXRv58zKJuAn5dFRSxMPWC42%2FLRsN5tcIH3dWO8%2Bi%2BgGrf0Dm2oYfT%2FLJYmqE3aP0qXuOtcSh1vJVe9xVwVb_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
            ],
          },
          {
            'address': {
              'line1': '3139 Methacton Ave',
              'line2': '',
              'city': 'Eagleville',
              'state': 'PA',
              'zip5': '19403',
              'zip4': '',
              'addressTypeCode': {
                'value': 'Primary',
                'tc': '1012300001',
              },
              'addressCountry': {
                'value': 'United States of America',
                'tc': '1',
              },
            },
            'policyClients': [
              {
                'pid': '0081964000',
                'marketingName': 'Guaranteed Term 10-15-20',
                'partyRoles': [
                  {
                    'name': 'Lloyd Christmas',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'HZLB8uT3gvknGiWssQ2x%2FDOOtSeU716%2F0qRmcyhNBlkfGQSMTq1%2Fk864Ww9QpFFnpmsOhMj1PiRvi9yId2JlGQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Insured',
                        'tc': '32',
                        'clientPolicyRoleId': 'iZtCxo8OxW1CB1F03Ytrfds9RiuMcuPFjVKdiLlRv0Ael%2FCxdYIQBEimwlp0g%2B5z6xs4vjUvf0Q56SQZx%2FAjNQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qPGik2%2F9ymUKN46vTdv2%2FDULPhRO%2FBCD7Z1d3pH53xLB3zYgME6qyxAq%2FQcgodDr9zP9aIg7khg%2B8d7KX1P9_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081768070',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'Harry Dunn',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'Qubo9XNv%2FVVSjcHGyzy7QQ67Ew4lV1aVwhZG6m6SjBetqxwxnHDgr1Z1zdQ1khb2jGp%2BCSDCcWUuTAYnbpsBTg%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qLUxe%2FioshMyWfGgbOby6QQl6A8RGULsTZtWZ8WwA8E25mEj76l6cmorV6pSArjS3Mz1GnL3di20OI6GfQ1a_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081767960',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'Mary Swanson',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': '9s%2F7fzIPfpGmmlPcM7KH7Lu%2BhalBELVmkTOvhwv70U%2FErdDcI9dU2r3wvj6ZPMSkDESjIIloae0a60gmxkn96g%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'pXRv58zKJuAn5dFRSxMPWC42%2FLRsN5tcIH3dWO8%2Bi%2BgGrf0Dm2oYfT%2FLJYmqE3aP0qXuOtcSh1vJVe9xVwVb_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
            ],
          },
        ],
      },
    }
  }

  function oneAddress() {
    return {
      'error': '',
      'status': '',
      'statusText': '',
      'data': {
        'addressPolicies': [
          {
            'address': {
              'line1': '3139 Methacton Ave',
              'line2': '',
              'city': 'Eagleville',
              'state': 'PA',
              'zip5': '19403',
              'zip4': '',
              'addressTypeCode': {
                'value': 'Primary',
                'tc': '1012300001',
              },
              'addressCountry': {
                'value': 'United States of America',
                'tc': '1',
              },
            },
            'policyClients': [
              {
                'pid': '0081964000',
                'marketingName': 'Guaranteed Term 10-15-20',
                'partyRoles': [
                  {
                    'name': 'Lloyd Christmas',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'HZLB8uT3gvknGiWssQ2x%2FDOOtSeU716%2F0qRmcyhNBlkfGQSMTq1%2Fk864Ww9QpFFnpmsOhMj1PiRvi9yId2JlGQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Insured',
                        'tc': '32',
                        'clientPolicyRoleId': 'iZtCxo8OxW1CB1F03Ytrfds9RiuMcuPFjVKdiLlRv0Ael%2FCxdYIQBEimwlp0g%2B5z6xs4vjUvf0Q56SQZx%2FAjNQ%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qPGik2%2F9ymUKN46vTdv2%2FDULPhRO%2FBCD7Z1d3pH53xLB3zYgME6qyxAq%2FQcgodDr9zP9aIg7khg%2B8d7KX1P9_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081768070',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'Harry Dunn',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': 'Qubo9XNv%2FVVSjcHGyzy7QQ67Ew4lV1aVwhZG6m6SjBetqxwxnHDgr1Z1zdQ1khb2jGp%2BCSDCcWUuTAYnbpsBTg%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'qLUxe%2FioshMyWfGgbOby6QQl6A8RGULsTZtWZ8WwA8E25mEj76l6cmorV6pSArjS3Mz1GnL3di20OI6GfQ1a_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
              {
                'pid': '0081767960',
                'marketingName': 'Life Wise',
                'partyRoles': [
                  {
                    'name': 'Mary Swanson',
                    'roles': [
                      {
                        'value': 'Payer',
                        'tc': '31',
                        'clientPolicyRoleId': '9s%2F7fzIPfpGmmlPcM7KH7Lu%2BhalBELVmkTOvhwv70U%2FErdDcI9dU2r3wvj6ZPMSkDESjIIloae0a60gmxkn96g%3D%3D_ENC',
                        'clientId': '02134035',
                      },
                      {
                        'value': 'Owner',
                        'tc': '8',
                        'clientPolicyRoleId': 'pXRv58zKJuAn5dFRSxMPWC42%2FLRsN5tcIH3dWO8%2Bi%2BgGrf0Dm2oYfT%2FLJYmqE3aP0qXuOtcSh1vJVe9xVwVb_ENC',
                        'clientId': '02134035',
                      },
                    ],
                  },
                ],
                'lineOfBusiness': {
                  'value': 'Life',
                  'tc': '1',
                },
              },
            ],
          },
        ],
      },
    }
  }

  function selectedRolesArray() {
    return [
      {
        'value': 'Owner',
        'tc': '8',
        'clientPolicyRoleId': 'pXRv58zKJuAn5dFRSxMPWC42%2FLRsN5tcIH3dWO8%2Bi%2BgGrf0Dm2oYfT%2FLJYmqE3aP0qXuOtcSh1vJVe9xVwVb_ENC',
        'clientId': '02134035',
        'pid': '0081767960',
        'isSelected': false,
        'partyName': 'Mary Swanson',
        'lineOfBusiness': {
          'value': 'Life',
          'tc': '1',
        },
      },
      {
        'value': 'Owner',
        'tc': '8',
        'clientPolicyRoleId': 'pXRv58zKJuAn5dFRSxMPWC42%2FLRsN5tcIH3dWO8%2Bi%2BgGrf0Dm2oYfT%2FLJYmqE3aP0qXuOtcSh1vJVe9xVwVb_ENC',
        'clientId': '02134035',
        'pid': '0081767960',
        'isSelected': false,
        'partyName': 'Mary Swanson',
        'lineOfBusiness': {
          'value': 'Annuity',
          'tc': '1',
        },
      },
    ]
  }
})()
