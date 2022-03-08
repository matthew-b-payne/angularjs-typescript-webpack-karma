(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('rolesUnitTestData', {
      csBenePercentage,
      csBeneEqualShare,
      csBeneFlatAmount,
      csBeneEqualShareBroken,
      csBeneMixedShares,
      shareDistributionPercent,
      associatedParty,
      newPerson,
      associatedParties,
    })

  function csBenePercentage() {
    return {
      id: '8f626440-462d-4e0e-89ef-2133cf50fc02',
      fullName: 'PAUL RUOFF',
      roles: [
        {
          role: 'Beneficiary',
          tc: '34',
          distribution: {
            value: 'Percent',
            tc: '2',
          },
          distributionValue: 75,
          relationshipToInsured: {
            value: 'Spouse',
            tc: '900',
          },
          beneEqualShareInd: false,
        },
      ],
      firstName: 'PAUL',
      lastName: 'RUOFF',
      registered: false,
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
    }
  }

  function csBeneFlatAmount() {
    return {
      id: '8f626440-462d-4e0e-89ef-2133cf50fc02',
      fullName: 'PAUL RUOFF',
      roles: [
        {
          role: 'Beneficiary',
          tc: '34',
          distribution: {
            tc: '5',
            value: 'Flat Amount',
          },
          distributionValue: 1000000,
          relationshipToInsured: {
            value: 'Spouse',
            tc: '900',
          },
          beneEqualShareInd: false,
        },
      ],
      firstName: 'PAUL',
      lastName: 'RUOFF',
      registered: false,
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
    }
  }

  function csBeneEqualShare() {
    return [
      {
        id: 'aa981cd2-83e7-432e-b628-bb1874e61d8e',
        fullName: 'SAM RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Son',
              tc: '5',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'SAM',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Unisex',
          tc: '3',
        },
      },
      {
        id: '0134864c-ce45-4e5b-9930-852ce29fd867',
        fullName: 'JANE RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'JANE',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
      {
        id: '47c0f5ea-873d-47a0-9da7-23eba903b17b',
        fullName: 'MARY RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'MARY',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
    ]
  }

  function csBeneMixedShares() {
    return [
      {
        id: 'aa981cd2-83e7-432e-b628-bb1874e61d8e',
        fullName: 'SAM RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Son',
              tc: '5',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'SAM',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Unisex',
          tc: '3',
        },
      },
      {
        id: '0134864c-ce45-4e5b-9930-852ce29fd867',
        fullName: 'JANE RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Percent',
              tc: '2',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'JANE',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
      {
        id: '47c0f5ea-873d-47a0-9da7-23eba903b17b',
        fullName: 'MARY RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Flat Amount',
              tc: '5',
            },
            distributionValue: 100000,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'MARY',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
    ]
  }

  function csBeneEqualShareBroken() {
    return [
      {
        id: 'aa981cd2-83e7-432e-b628-bb1874e61d8e',
        fullName: 'SAM RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Son',
              tc: '5',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'SAM',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Unisex',
          tc: '3',
        },
      },
      {
        id: '0134864c-ce45-4e5b-9930-852ce29fd867',
        fullName: 'JANE RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Equal Share',
              tc: '1',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'JANE',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
      {
        id: '47c0f5ea-873d-47a0-9da7-23eba903b17b',
        fullName: 'MARY RUOFF',
        roles: [
          {
            role: 'Contingent Beneficiary',
            tc: '36',
            distribution: {
              value: 'Percent',
              tc: '2',
            },
            distributionValue: 33.3333333,
            relationshipToInsured: {
              value: 'Daughter',
              tc: '6',
            },
            beneEqualShareInd: true,
          },
        ],
        firstName: 'MARY',
        lastName: 'RUOFF',
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Female',
          tc: '2',
        },
      },
    ]
  }

  function shareDistributionPercent() {
    return {value: 'Percent', tc: '2'}
  }

  function associatedParty() {
    return {
      isAssociatedParty: true,
      id: '74c29db1-a379-46fc-8950-484d0ff6afb3',
      fullName: 'ELLEN F HOKE',
      firstName: 'ELLEN',
      middleName: 'F',
      lastName: 'HOKE',
      birthDate: '05/29/1981',
      address: [
        {
          prefAddress: true,
          line1: '25163 CAMPUS DR',
          city: 'HAYWARD',
          state: 'CA',
          zip: '94542-1117',
          addressTypeCode: {
            value: 'Unknown',
            tc: '0',
          },
          primaryAddressId: 'Address_1_74c29db1-a379-46fc-8950-484d0ff6afb3',
        },
      ],
      registered: false,
      policyRoles: [
        {
          role: 'Payer',
          tc: '31',
          primaryAddressId: 'Address_1_74c29db1-a379-46fc-8950-484d0ff6afb3',
          polNumber: '0026950220',
        },
        {
          role: 'Owner',
          tc: '8',
          primaryAddressId: 'Address_1_74c29db1-a379-46fc-8950-484d0ff6afb3',
          polNumber: '0026950220',
        },
        {
          role: 'Beneficiary',
          tc: '34',
          distribution: {
            value: 'Equal Share',
            tc: '1',
          },
          distributionValue: 50,
          beneEqualShareInd: true,
          polNumber: '0026950220',
        },
      ],
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
    }
  }

  function newPerson() {
    return {
      fullName: 'New Person',
      id: 'person',
      partyTypeCode: {
        tc: '1',
        value: 'Person',
      },
      isNew: true,
      isNewPartyOption: true,
    }
  }

  function associatedParties() {
    return [
      {
        id: '74c29db1-a379-46fc-8950-484d0ff6afb3',
        fullName: 'ELLEN F HOKE',
        roles: [
          {
            role: 'Owner',
            tc: '8',
            primaryAddressId: 'Address_1_74c29db1-a379-46fc-8950-484d0ff6afb3',
          },
        ],
        firstName: 'ELLEN',
        middleName: 'F',
        lastName: 'HOKE',
        birthDate: '05/29/1981',
        address: [
          {
            prefAddress: true,
            line1: '25163 CAMPUS DR',
            city: 'HAYWARD',
            state: 'CA',
            zip: '94542-1117',
            addressTypeCode: {
              value: 'Unknown',
              tc: '0',
            },
            primaryAddressId: 'Address_1_74c29db1-a379-46fc-8950-484d0ff6afb3',
          },
        ],
        registered: false,
        partyTypeCode: {
          value: 'Person',
          tc: '1',
        },
        genderTypeCode: {
          value: 'Male',
          tc: '1',
        },
      },
    ]
  }
})()
