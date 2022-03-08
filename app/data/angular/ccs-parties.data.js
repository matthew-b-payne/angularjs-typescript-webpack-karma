
(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('ccsPartiesData', {
      person,
      organization,
      successorOwnerPerson,
      successorOwnerOrg,
      stepInAnnuitant,
    })

  function person() {
    return {
      id: '923e0ec7-da9c-4c64-a12b-515e85c1cc01',
      fullName: 'TES T TEST',
      roles: [
        {
          role: 'Primary Beneficiary',
          tc: '34',
          distribution: {
            value: 'Percent',
            tc: '2',
          },
          distributionValue: 55,
          relationshipToInsured: {
            value: 'Brother',
            tc: '7',
          },
          beneEqualShareInd: false,
          beneShareMethod: {
            value: 'Per Capita',
            tc: '1',
          },
        },
        {
          role: 'Insured',
          tc: '32',
          relationshipToInsured: {
            value: 'Self',
            tc: '91',
          },
          primaryAddressId: 'Address_1_923e0ec7-da9c-4c64-a12b-515e85c1cc01',
        },
        {
          role: 'Owner',
          tc: '8',
          relationshipToInsured: {
            value: 'Self',
            tc: '91',
          },
          primaryAddressId: 'Address_1_923e0ec7-da9c-4c64-a12b-515e85c1cc01',
        },
      ],
      partyType: 'Person',
      firstName: 'TES',
      lastName: 'TEST',
      middleName: 'T',
      title: 'JR',
      gender: 'Unisex',
      birthDate: '1974-03-13T04:00:00.000Z',
      address: [
        {
          type: 'Unknown',
          tc: '0',
          prefAddress: true,
          line1: '68 SUNFLOWER DR',
          city: 'HUNTINGDON VALLEY',
          state: 'PA',
          zip: '19006-5417',
          addressTypeCode: {
            value: 'Unknown',
            tc: '0',
          },
          primaryAddressId: 'Address_1_923e0ec7-da9c-4c64-a12b-515e85c1cc01',
        },
      ],
      producer: {
        interestPercent: 55,
      },
      relatable: true,
      registered: false,
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Unisex',
        tc: '3',
      },
      isOwner: false,
      calculatedAge: 47,
      role: {
        role: 'Insured',
        tc: '32',
        relationshipToInsured: {
          value: 'Self',
          tc: '91',
        },
        primaryAddressId: 'Address_1_923e0ec7-da9c-4c64-a12b-515e85c1cc01',
      },
      sortOrder: 5,
      isAssignee: false,
      $$hashKey: 'object:275',
    }
  }

  function organization() {
    return {
      id: 'df7aa527-7f2f-4b21-b842-86d76bd987a8',
      fullName: 'VIRTUA HEALTH',
      roles: [
        {
          role: 'Primary Beneficiary',
          tc: '34',
          distribution: {
            value: 'Percent',
            tc: '2',
          },
          distributionValue: 45,
          relationshipToInsured: {
            value: 'Corporation',
            tc: '908',
          },
          beneEqualShareInd: false,
          beneShareMethod: {
            value: 'Per Capita',
            tc: '1',
          },
        },
        {
          role: 'Owner',
          tc: '8',
          relationshipToInsured: {
            value: 'Self',
            tc: '91',
          },
          primaryAddressId: 'Address_8_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
        {
          role: 'Assignee',
          tc: '145',
          relationshipToInsured: {
            value: 'Self',
            tc: '91',
          },
          primaryAddressId: 'Address_7_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
        {
          role: 'Payer',
          tc: '31',
          relationshipToInsured: {
            value: 'Self',
            tc: '91',
          },
          primaryAddressId: 'Address_9_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
      ],
      partyType: 'Organization',
      address: [
        {
          type: 'Unknown',
          tc: '0',
          attentionLine: 'C/O TRISCENDNP',
          line1: '1100 PARKER SQ STE 245',
          city: 'FLOWER MOUND',
          state: 'TX',
          zip: '75028-7459',
          addressTypeCode: {
            value: 'Unknown',
            tc: '0',
          },
          primaryAddressId: 'Address_9_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
        {
          type: 'Unknown',
          tc: '0',
          line1: '1100 PARKER SQ STE 245',
          city: 'FLOWER MOUND',
          state: 'TX',
          zip: '75028-7459',
          addressTypeCode: {
            value: 'Unknown',
            tc: '0',
          },
          primaryAddressId: 'Address_7_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
        {
          type: 'Unknown',
          tc: '0',
          line1: '68 SUNFLOWER DR',
          city: 'HUNTINGDON VALLEY',
          state: 'PA',
          zip: '19006-5417',
          addressTypeCode: {
            value: 'Unknown',
            tc: '0',
          },
          primaryAddressId: 'Address_8_df7aa527-7f2f-4b21-b842-86d76bd987a8',
        },
      ],
      producer: {
        interestPercent: 45,
      },
      relatable: true,
      registered: false,
      partyTypeCode: {
        value: 'Organization',
        tc: '2',
      },
      isOwner: false,
      role: {
        role: 'Owner',
        tc: '8',
        relationshipToInsured: {
          value: 'Self',
          tc: '91',
        },
        primaryAddressId: 'Address_8_df7aa527-7f2f-4b21-b842-86d76bd987a8',
      },
      sortOrder: 9,
      isAssignee: false,
      $$hashKey: 'object:277',
    }
  }

  function successorOwnerPerson() {
    return {
      id: 'b22662a5-9d95-46be-a686-3f9d89cff3fb',
      fullName: 'SUCCESSOR OWNER PERSON',
      roles: [
        {
          role: 'Successor Owner',
          tc: '78',
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      partyType: 'Person',
      firstName: 'ROBERT',
      middleName: 'D',
      lastName: 'RIPPE',
      gender: 'Male',
      birthDate: '1924-08-25T04:00:00.000Z',
      address: [
        {
          type: 'Primary',
          tc: '1012300001',
          prefAddress: true,
          line1: '218 FAIRWAY W',
          city: 'JUPITER',
          state: 'FL',
          zip: '33469-1917',
          addressTypeCode: {
            value: 'Primary',
            tc: '1012300001',
          },
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      producer: {},
      relatable: true,
      registered: false,
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
      isOwner: false,
      calculatedAge: 97,
      role: {
        role: 'Successor Owner',
        tc: '78',
        primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
      },
      sortOrder: 12,
      isAssignee: false,
      $$hashKey: 'object:275',
    }
  }

  function successorOwnerOrg() {
    return {
      id: 'b22662a5-9d95-46be-a686-3f9d89cff3fb',
      fullName: 'SUCCESSOR OWNER ORGANIZATION',
      roles: [
        {
          role: 'Successor Owner',
          tc: '78',
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      partyType: 'Person',
      firstName: 'ROBERT',
      middleName: 'D',
      lastName: 'RIPPE',
      gender: 'Male',
      birthDate: '1924-08-25T04:00:00.000Z',
      address: [
        {
          type: 'Primary',
          tc: '1012300001',
          prefAddress: true,
          line1: '218 FAIRWAY W',
          city: 'JUPITER',
          state: 'FL',
          zip: '33469-1917',
          addressTypeCode: {
            value: 'Primary',
            tc: '1012300001',
          },
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      producer: {},
      relatable: true,
      registered: false,
      partyTypeCode: {
        value: 'Organization',
        tc: '2',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
      isOwner: false,
      calculatedAge: 97,
      role: {
        role: 'Successor Owner',
        tc: '78',
        primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
      },
      sortOrder: 12,
      isAssignee: false,
      $$hashKey: 'object:275',
    }
  }

  function stepInAnnuitant() {
    return {
      id: 'b22662a5-9d95-46be-a686-3f9d89cff3fb',
      fullName: 'STEP IN ANNUITANT PERSON',
      roles: [
        {
          role: 'Step In Annuitant',
          tc: '1012300009',
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      partyType: 'Person',
      firstName: 'ROBERT',
      middleName: 'D',
      lastName: 'RIPPE',
      gender: 'Male',
      birthDate: '1924-08-25T04:00:00.000Z',
      address: [
        {
          type: 'Primary',
          tc: '1012300001',
          prefAddress: true,
          line1: '218 FAIRWAY W',
          city: 'JUPITER',
          state: 'FL',
          zip: '33469-1917',
          addressTypeCode: {
            value: 'Primary',
            tc: '1012300001',
          },
          primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
        },
      ],
      producer: {},
      relatable: true,
      registered: false,
      partyTypeCode: {
        value: 'Person',
        tc: '1',
      },
      genderTypeCode: {
        value: 'Male',
        tc: '1',
      },
      isOwner: false,
      calculatedAge: 97,
      role: {
        role: 'Step In Annuitant',
        tc: '1012300009',
        primaryAddressId: 'Address_2_b22662a5-9d95-46be-a686-3f9d89cff3fb',
      },
      sortOrder: 12,
      isAssignee: false,
      $$hashKey: 'object:275',
    }
  }
})()
