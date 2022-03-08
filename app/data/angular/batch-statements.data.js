
(function() {
  'use strict'

  angular
    .module('unitTestData')
    .value('batchStatementsUnitTestData', {
      'available': available,
      'only2Available': only2Available,
      'availableWithDisabled': availableWithDisabled,
      'availablePriorTo714': availablePriorTo714,
      'availableAsOf714': availableAsOf714,
      'request': () => '',
      // TODO: figure out a better approach for downloading files
      'download': () => 'this should return a readable stream',
    })

  function available() {
    return {
      'type': {
        'value': 'Quarterly Statements',
        'tc': '1',
      },
      'options': [{
        'year': 2006,
        'quarter': 1,
        'status': 'DOWNLOAD',
        'fileName': 'QuarterlyStatements_2006_1.zip',
      },
      {
        'year': 2018,
        'quarter': 1,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2019,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 3,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 4,
        'status': 'AVAILABLE',
      },
      {
        'year': 2019,
        'quarter': 1,
        'status': 'AVAILABLE',
      },

      ],
    }
  }

  function availableWithDisabled() {
    return {
      'type': {
        'value': 'Quarterly Statements',
        'tc': '1',
      },
      'options': [{
        'year': 2018,
        'quarter': 1,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2019,
        'quarter': 2,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 3,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 4,
        'status': 'DOWNLOAD',
      },
      {
        'year': 2019,
        'quarter': 1,
        'status': 'AVAILABLE',
      },

      ],
    }
  }

  function only2Available() {
    return {
      'type': {
        'value': 'Quarterly Statements',
        'tc': '1',
      },
      'options': [{
        'year': 2006,
        'quarter': 1,
        'status': 'DOWNLOAD',
        'fileName': 'QuarterlyStatements_2006_1.zip',
      },
      {
        'year': 2018,
        'quarter': 1,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 3,
        'status': 'AVAILABLE',
      },
      ],
    }
  }

  function availablePriorTo714() {
    return {
      'type': {
        'value': 'Quarterly Statements',
        'tc': '1',
      },
      'options': [{
        'year': 2006,
        'quarter': 1,
        'status': 'DOWNLOAD',
        'fileName': 'QuarterlyStatements_2006_1.zip',
      },
      {
        'year': 2019,
        'quarter': 1,
        'status': 'AVAILABLE',
        'fileName': 'QuarterlyStatements_2006_1.zip',
      },
      {
        'year': 2018,
        'quarter': 1,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 2,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 3,
        'status': 'DOWNLOAD',
      },
      {
        'year': 2018,
        'quarter': 4,
        'status': 'AVAILABLE',
      },
      ],
    }
  }

  function availableAsOf714() {
    return {
      'type': {
        'value': 'Quarterly Statements',
        'tc': '1',
      },
      'options': [{
        'year': 2006,
        'quarter': 1,
        'status': 'DOWNLOAD',
        'fileName': 'QuarterlyStatements_2006_1.zip',
      },
      {
        'year': 2018,
        'quarter': 1,
        'status': 'WAITING',
      },
      {
        'year': 2018,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 3,
        'status': 'AVAILABLE',
      },
      {
        'year': 2018,
        'quarter': 4,
        'status': 'DOWNLOAD',
      },
      {
        'year': 2019,
        'quarter': 2,
        'status': 'AVAILABLE',
      },
      {
        'year': 2019,
        'quarter': 1,
        'status': 'WAITING',
      },
      ],
    }
  }
})()
