(function() {
  angular
    .module('unitTestData')
    .value('policyTransferUnitTestData', {
      mixedAvailableAndFunds: exampleAvailableFundsResponse,
      mixOfFundsSomePendingTransfer: mixOfFundsSomePendingTransfer,
    })

  function mixOfFundsSomePendingTransfer() {
    return {
      'subAccount': [
        {
          'productCode': 'F6',
          'productFullName': 'PMAM Aggressive Allocation',
          'totValue': 0,
          'estValue': 0.00,
          'subsequentPremiumAllocationTransferPct': 45.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'F7',
          'productFullName': 'PMAM Moderately Aggressive Allocation',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 29.6489,
          'unitValue': 19.663402,
          'totValue': 583.00,
          'subsequentPremiumAllocationTransferPct': 45.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'F8',
          'productFullName': 'PMAM Moderate Allocation',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 16.4607,
          'unitValue': 17.672392,
          'totValue': 290.90,
          'estValue': 290.90,
          'subsequentPremiumAllocationTransferPct': 5.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'F9',
          'productFullName': 'PMAM Moderately Conservative Allocation',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 1.1637,
          'unitValue': 16.182184,
          'totValue': 18.83,
          'subsequentPremiumAllocationTransferPct': 0.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'GK',
          'productFullName': 'T. Rowe Price Large Growth Stock',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 5.7021,
          'unitValue': 27.158485,
          'totValue': 154.86,
          'subsequentPremiumAllocationTransferPct': 0.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'FW',
          'productFullName': 'Eaton Vance Large Core Value',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 14.9254,
          'unitValue': 19.489577,
          'totValue': 290.89,
          'estValue': 290.89,
          'subsequentPremiumAllocationTransferPct': 0.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'QK',
          'productFullName': 'PMAM Quality Bond',
          'investType': 'Stock',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'currNumberUnits': 35.4037,
          'unitValue': 20.787408,
          'totValue': 735.95,
          'subsequentPremiumAllocationTransferPct': 0.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'IF',
          'productFullName': 'Indexed Fixed Account',
          'totValue': 0,
          'subsequentPremiumAllocationTransferPct': 5.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
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
          'productCode': 'IH',
          'productFullName': 'S&P 500 Holding Account',
          'investType': 'Bond',
          'valuationsAsOfDate': '2018-10-19-04:00',
          'totValue': 138.90,
          'subsequentPremiumAllocationTransferPct': 0.0,
          'subsequentPremiumAllocationTransferAmt': 0.0,
          'standardAssetRebalancingTransferPct': 0.0,
          'standardDollarCostAveragingTransferPct': 0.0,
          'standardDollarCostAveragingTransferAmt': 0.0,
          'category': {
            'value': 'Fixed Accounts',
            'tc': '17',
          },
          'type': {
            'value': 'Fixed Interest',
            'tc': '17',
          },
        },
      ],
      'subAccountTotal': 2213.33,
      'numFound': 9,
    }
  }

  function exampleAvailableFundsResponse() {
    return {
      'subAccount': [
        {
          'assetClass': {
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': 'F6',
          'genericProductCode': 'LSAGGR',
          'specificProductCode': 'LSAGF6',
          'productFullName': 'PMAM Aggressive Allocation',
          'managerName': 'PMAM AGGR ALLOC',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'estValue': 0.00,
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
          'productCode': 'F7',
          'genericProductCode': 'LSMAGG',
          'specificProductCode': 'LSMAF7',
          'productFullName': 'PMAM Moderately Aggressive Allocation',
          'totValue': 583.00,
          'managerName': 'PMAM MOD-AGG ALLOC',
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
          'productCode': 'F8',
          'genericProductCode': 'LSMMOD',
          'specificProductCode': 'LSMMF8',
          'productFullName': 'PMAM Moderate Allocation',
          'totValue': 290.90,
          'managerName': 'PMAM MOD ALLOC',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'estValue': 290.90,
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
          'productCode': 'F9',
          'genericProductCode': 'LSMCON',
          'specificProductCode': 'LSMCF9',
          'productFullName': 'PMAM Moderately Conservative Allocation',
          'totValue': 18.83,
          'managerName': 'PMAM MOD-CONS ALLOC',
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
          'productCode': 'GA',
          'genericProductCode': 'LSCONS',
          'specificProductCode': 'LSCOGA',
          'productFullName': 'PMAM Conservative Allocation',
          'managerName': 'PMAM CONS ALLOC',
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
          'productCode': 'GK',
          'genericProductCode': 'GROWST',
          'specificProductCode': 'GROWSK',
          'productFullName': 'T. Rowe Price Large Growth Stock',
          'totValue': 154.86,
          'managerName': 'TROWE LRG GROWTH STOCK',
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
          'productCode': 'FV',
          'genericProductCode': 'LGRWTH',
          'specificProductCode': 'LGRWFV',
          'productFullName': 'Morgan Stanley Investment Management Large Core Growth',
          'managerName': 'WELLS LARGE CORE GRWTH',
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
          'productCode': 'WK',
          'genericProductCode': 'LRGGRO',
          'specificProductCode': 'LRGGRK',
          'productFullName': 'MFS Investments Large Cap Growth',
          'managerName': 'MFS LARGE CAP GROWTH',
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
          'productCode': 'FW',
          'genericProductCode': 'LVALUE',
          'specificProductCode': 'LVALFW',
          'productFullName': 'Eaton Vance Large Core Value',
          'totValue': 290.89,
          'managerName': 'EATON LARGE CORE VALUE',
          'fundUse': {
            'value': 'Unrestricted',
            'tc': '1',
          },
          'estValue': 290.89,
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
          'productCode': 'VK',
          'genericProductCode': 'VALUEQ',
          'specificProductCode': 'VALUEK',
          'productFullName': 'AllianceBernstein Large Cap Value Fund',
          'managerName': 'LOOMIS LARGE CAP VALUE',
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
          'productCode': 'JK',
          'genericProductCode': 'MIDGRJ',
          'specificProductCode': 'MIDGRK',
          'productFullName': 'Ivy Investment Management Mid Cap Growth',
          'managerName': 'IVY MID CAP GROWTH',
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
            'value': 'Variable',
            'tc': '2',
          },
          'productCode': '1K',
          'genericProductCode': 'MIDVAR',
          'specificProductCode': 'MIDVAK',
          'productFullName': 'Neuberger Berman Mid Cap Value',
          'managerName': 'NB MID CAP VALUE',
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
          'productCode': 'YK',
          'genericProductCode': 'STRVAL',
          'specificProductCode': 'STRVAK',
          'productFullName': 'American Century Mid Core Value',
          'managerName': 'AMER CENT MID CORE VAL',
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
          'productCode': 'F5',
          'genericProductCode': 'SMIDGR',
          'specificProductCode': 'SMIDF5',
          'productFullName': 'Goldman Sachs Asset Management SMID Cap Growth',
          'managerName': 'WELLS SMID CAP GROWTH',
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
          'productCode': 'F4',
          'genericProductCode': 'SMIDVL',
          'specificProductCode': 'SMIDF4',
          'productFullName': 'AllianceBernstein SMID Cap Value',
          'managerName': 'A. B. SMID CAP VALUE',
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
          'productCode': 'OK',
          'genericProductCode': 'EMGGRO',
          'specificProductCode': 'EMGGRK',
          'productFullName': 'Janus Capital Small Cap Growth',
          'managerName': 'JANUS SMALL CAP GROWTH',
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
          'productCode': 'SK',
          'genericProductCode': 'SMLCAP',
          'specificProductCode': 'SMLCAK',
          'productFullName': 'Goldman Sachs Small Cap Value',
          'managerName': 'GS SMALL CAP VAL',
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
          'productCode': 'XK',
          'genericProductCode': 'FLEXMN',
          'specificProductCode': 'FLEXMK',
          'productFullName': 'T. Rowe Price Flexibly Managed',
          'managerName': 'TROWE FLEXIBLY MGD',
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
          'productCode': 'FX',
          'genericProductCode': 'LRGBAL',
          'specificProductCode': 'LRGBFX',
          'productFullName': 'PMAM Balanced',
          'managerName': 'PMAM BALANCED FUND',
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
          'productCode': '5K',
          'genericProductCode': 'INDEXT',
          'specificProductCode': 'INDEXK',
          'productFullName': 'State Street Index 500',
          'managerName': 'STATE STREET INDEX 500',
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
          'productCode': 'F0',
          'genericProductCode': 'SMLIND',
          'specificProductCode': 'SMLIF0',
          'productFullName': 'State Street Small Cap Index',
          'managerName': 'STATE ST SML CAP INDX',
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
          'productCode': 'FZ',
          'genericProductCode': 'INTIND',
          'specificProductCode': 'INTIFZ',
          'productFullName': 'State Street Developed International Index',
          'managerName': 'STATE ST DEV INTL INDX',
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
          'productCode': 'IK',
          'genericProductCode': 'INTLEQ',
          'specificProductCode': 'INTLEK',
          'productFullName': 'Vontobel Asset Management International Equity',
          'managerName': 'VONTOBEL INTL EQUITY',
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
          'productCode': 'FY',
          'genericProductCode': 'INTEMG',
          'specificProductCode': 'INTEFY',
          'productFullName': 'Morgan Stanley Emerging Markets Equity',
          'managerName': 'MORG STANLEY EMRG MKTS',
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
          'productCode': 'UK',
          'genericProductCode': 'REINVT',
          'specificProductCode': 'REINVK',
          'productFullName': 'Cohen & Steers Real Estate Securities Fund',
          'managerName': 'C&S REAL ESTATE',
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
          'productCode': 'MK',
          'genericProductCode': 'MNYMKT',
          'specificProductCode': 'MNYMKK',
          'productFullName': 'PMAM Money Market',
          'managerName': 'PMAM MONEY MARKET',
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
          'productCode': 'CK',
          'genericProductCode': 'LIMITC',
          'specificProductCode': 'LIMITK',
          'productFullName': 'PMAM Limited Maturity Bond',
          'managerName': 'PMAM LIMITED MATURITY',
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
          'productCode': 'QK',
          'genericProductCode': 'QUALBD',
          'specificProductCode': 'QUALBK',
          'productFullName': 'PMAM Quality Bond',
          'totValue': 735.95,
          'managerName': 'PMAM QUALITY BOND',
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
          'productCode': 'HK',
          'genericProductCode': 'HIBOND',
          'specificProductCode': 'HIBONK',
          'productFullName': 'PMAM High Yield Bond',
          'managerName': 'TROWE HIGH YIELD',
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
            'value': 'Fixed',
            'tc': '1',
          },
          'productCode': 'F1',
          'genericProductCode': 'FIXFND',
          'specificProductCode': 'FIXFND',
          'productFullName': 'Fixed Account',
          'managerName': 'FIXED FUND',
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
          'productCode': 'IF',
          'genericProductCode': 'FIXIDX',
          'specificProductCode': 'FIXIDX',
          'productFullName': 'Indexed Fixed Account',
          'managerName': 'INDEXED ACCOUNT',
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
          'productCode': 'IH',
          'genericProductCode': 'FIXHLD',
          'specificProductCode': 'FIXHLD',
          'productFullName': 'S&P 500 Holding Account',
          'totValue': 138.90,
          'managerName': 'INDEXED HOLDING ACCT',
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
      ],
      'subAccountTotal': 2213.33,
      'numFound': 32,
    }
  }
})()
