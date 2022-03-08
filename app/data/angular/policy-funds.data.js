(function() {
  angular
    .module('unitTestData')
    .value('policyFundsUnitTestData', {
      fiveFundsFourCategories: fiveFundsFourCategories,
      fiveFundsFourCategoriesForView: fiveFundsFourCategoriesForView,
      fundCategoriesWithOnly60PercentAllocation: fundCategoriesWithOnly60PercentAllocation,
      lotsOfAvailableFunds: lotsOfAvailableFunds,
      mixedAvailableAndCurrentFunds: mixedAvailableAndCurrentFunds,
      fundsWithFixedFunds: fundsWithFixedFunds,
    })

  function fiveFundsFourCategories() {
    return {
      'subAccount': [
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B9',
          'productFullName': 'Cohen & Steers Real Estate Securities Fund',
          'investType': 'Stock',
          'valuationsAsOfDate': '2017-10-25',
          'currNumberUnits': 242.5827,
          'unitValue': 32.340653,
          'pricingAsOfDate': '2018-07-16',
          'totCost': 5065.62,
          'totValue': 7845.28,
          'subsequentPremiumAllocationTransferPct': 10.0,
          'category': {
            'value': 'Specialty',
            'tc': '9',
          },
          'type': {
            'value': 'Special Interest',
            'tc': '9',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H6',
          'productFullName': 'Eaton Vance Large Core Value',
          'investType': 'Stock',
          'valuationsAsOfDate': '2017-10-25',
          'currNumberUnits': 616.3312,
          'unitValue': 16.728035,
          'pricingAsOfDate': '2018-07-16',
          'totCost': 6630.55,
          'totValue': 10310.01,
          'subsequentPremiumAllocationTransferPct': 15.0,
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Value',
            'tc': '20',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H5',
          'productFullName': 'Morgan Stanley Investment Management Large Core Growth',
          'investType': 'Stock',
          'valuationsAsOfDate': '2017-10-25',
          'currNumberUnits': 933.7624,
          'unitValue': 22.226419,
          'pricingAsOfDate': '2018-07-16',
          'totCost': 10045.48,
          'totValue': 20754.19,
          'subsequentPremiumAllocationTransferPct': 20.0,
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Growth',
            'tc': '19',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'BY',
          'productFullName': 'T. Rowe Price Flexibly Managed',
          'investType': 'Stock',
          'valuationsAsOfDate': '2017-10-25',
          'currNumberUnits': 1195.8976,
          'unitValue': 38.679416,
          'pricingAsOfDate': '2018-07-16',
          'totCost': 23529.58,
          'totValue': 46256.62,
          'subsequentPremiumAllocationTransferPct': 40.0,
          'category': {
            'value': 'Balanced',
            'tc': '2',
          },
          'type': {
            'value': 'Balanced',
            'tc': '2',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B2',
          'productFullName': 'Vontobel Asset Management International Equity',
          'investType': 'Stock',
          'valuationsAsOfDate': '2017-10-25',
          'currNumberUnits': 349.6741,
          'unitValue': 31.685124,
          'pricingAsOfDate': '2018-07-16',
          'totCost': 9531.68,
          'totValue': 11079.47,
          'subsequentPremiumAllocationTransferPct': 15.0,
          'category': {
            'value': 'International',
            'tc': '6',
          },
          'type': {
            'value': 'International Stock',
            'tc': '6',
          },
        },
      ],
      'subAccountTotal': 96245.57,
      'numFound': 5,
    }
  }

  function fiveFundsFourCategoriesForView() {
    return [
      {
        'category': 'Specialty',
        'funds': [
          {
            'assetClass': {
              'value': 'Variable',
              'tc': '2',
            },
            'productCode': 'B9',
            'productFullName': 'Cohen & Steers Real Estate Securities Fund',
            'investType': 'Stock',
            'valuationsAsOfDate': '2017-10-25',
            'currNumberUnits': 242.5827,
            'unitValue': 32.340653,
            'pricingAsOfDate': '2018-07-16',
            'totCost': 5065.62,
            'totValue': 7845.28,
            'subsequentPremiumAllocationTransferPct': 10,
            'category': {
              'value': 'Specialty',
              'tc': '9',
            },
            'type': {
              'value': 'Special Interest',
              'tc': '9',
            },
          },
        ],
      },
      {
        'category': 'Large Cap',
        'funds': [
          {
            'assetClass': {
              'value': 'Variable',
              'tc': '2',
            },
            'productCode': 'H6',
            'productFullName': 'Eaton Vance Large Core Value',
            'investType': 'Stock',
            'valuationsAsOfDate': '2017-10-25',
            'currNumberUnits': 616.3312,
            'unitValue': 16.728035,
            'pricingAsOfDate': '2018-07-16',
            'totCost': 6630.55,
            'totValue': 10310.01,
            'subsequentPremiumAllocationTransferPct': 15,
            'category': {
              'value': 'Large Cap',
              'tc': '1012300006',
            },
            'type': {
              'value': 'Large Value',
              'tc': '20',
            },
          },
          {
            'assetClass': {
              'value': 'Variable',
              'tc': '2',
            },
            'productCode': 'H5',
            'productFullName': 'Morgan Stanley Investment Management Large Core Growth',
            'investType': 'Stock',
            'valuationsAsOfDate': '2017-10-25',
            'currNumberUnits': 933.7624,
            'unitValue': 22.226419,
            'pricingAsOfDate': '2018-07-16',
            'totCost': 10045.48,
            'totValue': 20754.19,
            'subsequentPremiumAllocationTransferPct': 20,
            'category': {
              'value': 'Large Cap',
              'tc': '1012300006',
            },
            'type': {
              'value': 'Large Growth',
              'tc': '19',
            },
          },
        ],
      },
      {
        'category': 'Balanced',
        'funds': [
          {
            'assetClass': {
              'value': 'Variable',
              'tc': '2',
            },
            'productCode': 'BY',
            'productFullName': 'T. Rowe Price Flexibly Managed',
            'investType': 'Stock',
            'valuationsAsOfDate': '2017-10-25',
            'currNumberUnits': 1195.8976,
            'unitValue': 38.679416,
            'pricingAsOfDate': '2018-07-16',
            'totCost': 23529.58,
            'totValue': 46256.62,
            'subsequentPremiumAllocationTransferPct': 40,
            'category': {
              'value': 'Balanced',
              'tc': '2',
            },
            'type': {
              'value': 'Balanced',
              'tc': '2',
            },
          },
        ],
      },
      {
        'category': 'International',
        'funds': [
          {
            'assetClass': {
              'value': 'Variable',
              'tc': '2',
            },
            'productCode': 'B2',
            'productFullName': 'Vontobel Asset Management International Equity',
            'investType': 'Stock',
            'valuationsAsOfDate': '2017-10-25',
            'currNumberUnits': 349.6741,
            'unitValue': 31.685124,
            'pricingAsOfDate': '2018-07-16',
            'totCost': 9531.68,
            'totValue': 11079.47,
            'subsequentPremiumAllocationTransferPct': 15,
            'category': {
              'value': 'International',
              'tc': '6',
            },
            'type': {
              'value': 'International Stock',
              'tc': '6',
            },
          },
        ],
      },
    ]
  }

  function fundCategoriesWithOnly60PercentAllocation() {
    return [
      {
        'category': 'LifeStyle',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'ME',
            'productFullName': 'PMAM Aggressive Allocation',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MF',
            'productFullName': 'PMAM Moderately Aggressive Allocation',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MG',
            'productFullName': 'PMAM Moderate Allocation',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MH',
            'productFullName': 'PMAM Moderately Conservative Allocation',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MJ',
            'productFullName': 'PMAM Conservative Allocation',
            'totValue': 0,
          },
        ],
      },
      {
        'category': 'Balanced',
        'funds': [
          {
            'currentAllocationPercent': 20,
            'productCode': 'LH',
            'productFullName': 'T. Rowe Price Flexibly Managed',
            'totValue': 46759.41,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'L8',
            'productFullName': 'PMAM Balanced',
            'totValue': 0,
          },
        ],
      },
      {
        'category': 'Index',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'LP',
            'productFullName': 'State Street Index 500',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MB',
            'productFullName': 'State Street Small Cap Index',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'MA',
            'productFullName': 'State Street Developed International Index',
            'totValue': 0,
          },
        ],
      },
      {
        'category': 'Fixed Income',
        'funds': [
          {
            'currentAllocationPercent': 20,
            'productCode': 'LY',
            'productFullName': 'PMAM Money Market',
            'totValue': 40536.94,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'LR',
            'productFullName': 'PMAM Limited Maturity Bond',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'LZ',
            'productFullName': 'PMAM Quality Bond',
            'totValue': 0,
          },
          {
            'currentAllocationPercent': 20,
            'productCode': 'LK',
            'productFullName': 'PMAM High Yield Bond',
            'totValue': 22028.38,
          },
        ],
      },
    ]
  }

  function lotsOfAvailableFunds() {
    return {
      'subAccount': [
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IB',
          'genericProductCode': 'SMIDVL',
          'specificProductCode': 'SMIDIB',
          'productFullName': 'AllianceBernstein SMID Cap Value',
          'managerName': 'AllianceBernstein',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'SMID Cap',
            'tc': '1012300008',
          },
          'type': {
            'value': 'Small/Mid Value',
            'tc': '1012300001',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'BQ',
          'genericProductCode': 'EMGGRO',
          'specificProductCode': 'EMGGBQ',
          'productFullName': 'Janus Capital Small Cap Growth',
          'managerName': 'Janus Capital Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Small Cap',
            'tc': '1012300009',
          },
          'type': {
            'value': 'Small Growth',
            'tc': '26',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'ID',
          'genericProductCode': 'LSAGGR',
          'specificProductCode': 'LSAGID',
          'productFullName': 'PMAM Aggressive Allocation',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'LifeStyle',
            'tc': '7',
          },
          'type': {
            'value': 'Balanced/Asset Allocation',
            'tc': '7',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B8',
          'genericProductCode': 'QUALBD',
          'specificProductCode': 'QUALB8',
          'productFullName': 'PMAM Quality Bond',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Income',
            'tc': '3',
          },
          'type': {
            'value': 'Corporate High Quality Bond',
            'tc': '34',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B6',
          'genericProductCode': 'MIDVAR',
          'specificProductCode': 'MIDVB6',
          'productFullName': 'Neuberger Berman Mid Cap Value',
          'managerName': 'Neuberger Berman',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Mid Cap',
            'tc': '1012300007',
          },
          'type': {
            'value': 'Mid Value',
            'tc': '24',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IC',
          'genericProductCode': 'SMIDGR',
          'specificProductCode': 'SMIDIC',
          'productFullName': 'Goldman Sachs Asset Management SMID Cap Growth',
          'managerName': 'Goldman Sachs Asset Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'SMID Cap',
            'tc': '1012300008',
          },
          'type': {
            'value': 'Small/Mid Growth',
            'tc': '1012300002',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'CA',
          'genericProductCode': 'SMLCAP',
          'specificProductCode': 'SMLCCA',
          'productFullName': 'Goldman Sachs Small Cap Value',
          'managerName': 'Goldman Sachs Asset Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Small Cap',
            'tc': '1012300009',
          },
          'type': {
            'value': 'Small Value',
            'tc': '29',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B3',
          'genericProductCode': 'LIMITC',
          'specificProductCode': 'LIMIB3',
          'productFullName': 'PMAM Limited Maturity Bond',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Income',
            'tc': '3',
          },
          'type': {
            'value': 'Short Term Bond',
            'tc': '28',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B2',
          'genericProductCode': 'INTLEQ',
          'specificProductCode': 'INTLB2',
          'productFullName': 'Vontobel Asset Management International Equity',
          'totValue': 11076.38,
          'managerName': 'Vontobel Asset Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'International',
            'tc': '6',
          },
          'type': {
            'value': 'International Stock',
            'tc': '6',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'BY',
          'genericProductCode': 'FLEXMN',
          'specificProductCode': 'FLEXBY',
          'productFullName': 'T. Rowe Price Flexibly Managed',
          'totValue': 46294.36,
          'managerName': 'T. Rowe Price Associates',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Balanced',
            'tc': '2',
          },
          'type': {
            'value': 'Balanced',
            'tc': '2',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'CB',
          'genericProductCode': 'STRVAL',
          'specificProductCode': 'STRVCB',
          'productFullName': 'American Century Mid Core Value',
          'managerName': 'American Century Investment Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Mid Cap',
            'tc': '1012300007',
          },
          'type': {
            'value': 'Mid Value',
            'tc': '24',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H7',
          'genericProductCode': 'LRGBAL',
          'specificProductCode': 'LRGBH7',
          'productFullName': 'PMAM Balanced',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Balanced',
            'tc': '2',
          },
          'type': {
            'value': 'Balanced',
            'tc': '2',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H6',
          'genericProductCode': 'LVALUE',
          'specificProductCode': 'LVALH6',
          'productFullName': 'Eaton Vance Large Core Value',
          'totValue': 10366.48,
          'managerName': 'Eaton Vance Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Value',
            'tc': '20',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B9',
          'genericProductCode': 'REINVT',
          'specificProductCode': 'REINB9',
          'productFullName': 'Cohen & Steers Real Estate Securities Fund',
          'totValue': 7718.71,
          'managerName': 'Cohen & Steers Capital Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Specialty',
            'tc': '9',
          },
          'type': {
            'value': 'Special Interest',
            'tc': '9',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H8',
          'genericProductCode': 'INTEMG',
          'specificProductCode': 'INTEH8',
          'productFullName': 'Morgan Stanley Emerging Markets Equity',
          'managerName': 'Morgan Stanley Investment Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'International',
            'tc': '6',
          },
          'type': {
            'value': 'International Stock',
            'tc': '6',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IA',
          'genericProductCode': 'SMLIND',
          'specificProductCode': 'SMLIIA',
          'productFullName': 'State Street Small Cap Index',
          'managerName': 'State Street Global Advisors',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Index',
            'tc': '1012300010',
          },
          'type': {
            'value': 'Small Cap Indexed',
            'tc': '1012300005',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B5',
          'genericProductCode': 'MIDGRJ',
          'specificProductCode': 'MIDGB5',
          'productFullName': 'Ivy Investment Management Mid Cap Growth',
          'managerName': 'Ivy Investments',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Mid Cap',
            'tc': '1012300007',
          },
          'type': {
            'value': 'Mid Growth',
            'tc': '22',
          },
        },
        {
          'assetClass': {
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'X6',
          'genericProductCode': 'DCA6',
          'specificProductCode': 'DCA6',
          'productFullName': '6-Month Dollar Cost Averaging (DCA) Account',
          'managerName': '6-MO DCA',
          'fundUse': {
            'value': 'New Money Fund',
            'tc': '2',
          },
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
        {
          'assetClass': {
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'X5',
          'genericProductCode': 'FXFND5',
          'specificProductCode': 'FXFND5',
          'productFullName': '5-Yr Fixed',
          'managerName': '5-Year Fixed Fund',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
        {
          'assetClass': {
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'X2',
          'genericProductCode': 'DCA12',
          'specificProductCode': 'DCA12',
          'productFullName': '12-Month Dollar Cost Averaging (DCA) Account',
          'managerName': '12-MO DCA',
          'fundUse': {
            'value': 'New Money Fund',
            'tc': '2',
          },
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
        {
          'assetClass': {
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'X7',
          'genericProductCode': 'FXFND7',
          'specificProductCode': 'FXFND7',
          'productFullName': '7-Yr Fixed',
          'managerName': '7-Year Fixed Fund',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
        {
          'assetClass': {
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'X3',
          'genericProductCode': 'FXFND3',
          'specificProductCode': 'FXFND3',
          'productFullName': '3-Yr Fixed',
          'managerName': '3-Year Fixed Fund',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B7',
          'genericProductCode': 'MNYMKT',
          'specificProductCode': 'MNYMB7',
          'productFullName': 'PMAM Money Market',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Income',
            'tc': '3',
          },
          'type': {
            'value': 'Money Market',
            'tc': '11',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B1',
          'genericProductCode': 'INDEXT',
          'specificProductCode': 'INDEB1',
          'productFullName': 'State Street Index 500',
          'managerName': 'State Street Global Advisors',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Index',
            'tc': '1012300010',
          },
          'type': {
            'value': 'Indexed',
            'tc': '1012300004',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H9',
          'genericProductCode': 'INTIND',
          'specificProductCode': 'INTIH9',
          'productFullName': 'State Street Developed International Index',
          'managerName': 'State Street Global Advisors',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Index',
            'tc': '1012300010',
          },
          'type': {
            'value': 'International Indexed',
            'tc': '1012300003',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'II',
          'genericProductCode': 'LSMMOD',
          'specificProductCode': 'LSMMII',
          'productFullName': 'PMAM Moderate Allocation',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'LifeStyle',
            'tc': '7',
          },
          'type': {
            'value': 'Balanced/Asset Allocation',
            'tc': '7',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IL',
          'genericProductCode': 'LSCONS',
          'specificProductCode': 'LSCOIL',
          'productFullName': 'PMAM Conservative Allocation',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'LifeStyle',
            'tc': '7',
          },
          'type': {
            'value': 'Balanced/Asset Allocation',
            'tc': '7',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IJ',
          'genericProductCode': 'LSMCON',
          'specificProductCode': 'LSMCIJ',
          'productFullName': 'PMAM Moderately Conservative Allocation',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'LifeStyle',
            'tc': '7',
          },
          'type': {
            'value': 'Balanced/Asset Allocation',
            'tc': '7',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B0',
          'genericProductCode': 'HIBOND',
          'specificProductCode': 'HIBOB0',
          'productFullName': 'PMAM High Yield Bond',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Fixed Income',
            'tc': '3',
          },
          'type': {
            'value': 'Corporate High Yield Bond',
            'tc': '35',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'IG',
          'genericProductCode': 'LSMAGG',
          'specificProductCode': 'LSMAIG',
          'productFullName': 'PMAM Moderately Aggressive Allocation',
          'managerName': 'Penn Mutual Asset Management, LLC.',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'LifeStyle',
            'tc': '7',
          },
          'type': {
            'value': 'Balanced/Asset Allocation',
            'tc': '7',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'H5',
          'genericProductCode': 'LGRWTH',
          'specificProductCode': 'LGRWH5',
          'productFullName': 'Morgan Stanley Investment Management Large Core Growth',
          'totValue': 20699.74,
          'managerName': 'Morgan Stanley Investment Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Growth',
            'tc': '19',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'BZ',
          'genericProductCode': 'GROWST',
          'specificProductCode': 'GROWBZ',
          'productFullName': 'T. Rowe Price Large Growth Stock',
          'managerName': 'T. Rowe Price Associates',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Growth',
            'tc': '19',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'CD',
          'genericProductCode': 'VALUEQ',
          'specificProductCode': 'VALUCD',
          'productFullName': 'Loomis Sayles Large Cap Value Fund',
          'managerName': 'Loomis, Sayles & Company',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Value',
            'tc': '20',
          },
        },
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'B4',
          'genericProductCode': 'LRGGRO',
          'specificProductCode': 'LRGGB4',
          'productFullName': 'MFS Investments Large Cap Growth',
          'managerName': 'MFS Investment Management',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'category': {
            'value': 'Large Cap',
            'tc': '1012300006',
          },
          'type': {
            'value': 'Large Growth',
            'tc': '19',
          },
        },
      ],
      'subAccountTotal': 96155.67,
      'numFound': 34,
    }
  }

  function mixedAvailableAndCurrentFunds() {
    return [
      {
        'category': 'SMID Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'IB',
            'productFullName': 'AllianceBernstein SMID Cap Value',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Small Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'BQ',
            'productFullName': 'Janus Capital Small Cap Growth',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'LifeStyle',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'ID',
            'productFullName': 'PMAM Aggressive Allocation',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Fixed Income',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B8',
            'productFullName': 'PMAM Quality Bond',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Mid Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B6',
            'productFullName': 'Neuberger Berman Mid Cap Value',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'SMID Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'IC',
            'productFullName': 'Goldman Sachs Asset Management SMID Cap Growth',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Small Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'CA',
            'productFullName': 'Goldman Sachs Small Cap Value',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Fixed Income',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B3',
            'productFullName': 'PMAM Limited Maturity Bond',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'International',
        'funds': [
          {
            'currentAllocationPercent': 15,
            'productCode': 'B2',
            'productFullName': 'Vontobel Asset Management International Equity',
            'totValue': 11079.47,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Balanced',
        'funds': [
          {
            'currentAllocationPercent': 40,
            'productCode': 'BY',
            'productFullName': 'T. Rowe Price Flexibly Managed',
            'totValue': 46256.62,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Mid Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'CB',
            'productFullName': 'American Century Mid Core Value',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Balanced',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'H7',
            'productFullName': 'PMAM Balanced',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Large Cap',
        'funds': [
          {
            'currentAllocationPercent': 15,
            'productCode': 'H6',
            'productFullName': 'Eaton Vance Large Core Value',
            'totValue': 10310.01,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Specialty',
        'funds': [
          {
            'currentAllocationPercent': 10,
            'productCode': 'B9',
            'productFullName': 'Cohen & Steers Real Estate Securities Fund',
            'totValue': 7845.28,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'International',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'H8',
            'productFullName': 'Morgan Stanley Emerging Markets Equity',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Index',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'IA',
            'productFullName': 'State Street Small Cap Index',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Mid Cap',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B5',
            'productFullName': 'Ivy Investment Management Mid Cap Growth',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Fixed Accounts',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'X6',
            'productFullName': '6-Month Dollar Cost Averaging (DCA) Account',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'X5',
            'productFullName': '5-Yr Fixed',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'X2',
            'productFullName': '12-Month Dollar Cost Averaging (DCA) Account',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'X7',
            'productFullName': '7-Yr Fixed',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'X3',
            'productFullName': '3-Yr Fixed',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Fixed Income',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B7',
            'productFullName': 'PMAM Money Market',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Index',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B1',
            'productFullName': 'State Street Index 500',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'H9',
            'productFullName': 'State Street Developed International Index',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'LifeStyle',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'II',
            'productFullName': 'PMAM Moderate Allocation',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'IL',
            'productFullName': 'PMAM Conservative Allocation',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'IJ',
            'productFullName': 'PMAM Moderately Conservative Allocation',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Fixed Income',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'B0',
            'productFullName': 'PMAM High Yield Bond',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'LifeStyle',
        'funds': [
          {
            'currentAllocationPercent': 0,
            'productCode': 'IG',
            'productFullName': 'PMAM Moderately Aggressive Allocation',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
      {
        'category': 'Large Cap',
        'funds': [
          {
            'currentAllocationPercent': 20,
            'productCode': 'H5',
            'productFullName': 'Morgan Stanley Investment Management Large Core Growth',
            'totValue': 20754.19,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'BZ',
            'productFullName': 'T. Rowe Price Large Growth Stock',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'CD',
            'productFullName': 'Loomis Sayles Large Cap Value Fund',
            'totValue': 0,
            'canTransact': undefined,
          },
          {
            'currentAllocationPercent': 0,
            'productCode': 'B4',
            'productFullName': 'MFS Investments Large Cap Growth',
            'totValue': 0,
            'canTransact': undefined,
          },
        ],
      },
    ]
  }

  function fundsWithFixedFunds() {
    return [
      {
        'assetClass': {
          'tc': '1',
          'value': 'Fixed',
        },
        'category': {
          'tc': '17',
          'value': 'Fixed Accounts',
        },
        'investType': 'Bond',
        'productCode': 'X1',
        'productFullName': '1-Yr Fixed',
        'standardAssetRebalancingTransferPct': 0,
        'standardDollarCostAveragingTransferAmt': 0,
        'standardDollarCostAveragingTransferPct': 0,
        'subsequentPremiumAllocationTransferAmt': 0,
        'subsequentPremiumAllocationTransferPct': 0,
        'totValue': 19.64,
        'type': {
          'tc': '17',
          'value': 'Fixed Interest',
        },
        'valuationsAsOfDate': '2019-04-02',
      },
      {
        'assetClass': {
          'tc': '1',
          'value': 'Fixed',
        },
        'category': {
          'tc': '17',
          'value': 'Fixed Accounts',
        },
        'investType': 'Bond',
        'productCode': 'X1',
        'productFullName': 'Slap',
        'standardAssetRebalancingTransferPct': 0,
        'standardDollarCostAveragingTransferAmt': 0,
        'standardDollarCostAveragingTransferPct': 0,
        'subsequentPremiumAllocationTransferAmt': 0,
        'subsequentPremiumAllocationTransferPct': 0,
        'totValue': 19.64,
        'type': {
          'tc': '17',
          'value': 'Fixed Interest',
        },
        'valuationsAsOfDate': '2019-04-02',
      },
      {
        'assetClass': {
          'tc': '1',
          'value': 'Fixed',
        },
        'category': {
          'tc': '17',
          'value': 'Fixed Accounts',
        },
        'investType': 'Bond',
        'productCode': 'X1',
        'productFullName': 'Chop',
        'standardAssetRebalancingTransferPct': 0,
        'standardDollarCostAveragingTransferAmt': 0,
        'standardDollarCostAveragingTransferPct': 0,
        'subsequentPremiumAllocationTransferAmt': 0,
        'subsequentPremiumAllocationTransferPct': 0,
        'totValue': 19.64,
        'type': {
          'tc': '17',
          'value': 'Fixed Interest',
        },
        'valuationsAsOfDate': '2019-04-02',
      },
    ]
  }
})()
