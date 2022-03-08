import * as angular from 'angular'
import "angular-mocks"
import * as sinon from 'sinon'
import { expect } from 'chai'

describe('EpayUIStateService', function() {
  let epayUIState

  beforeEach(angular.mock.module('app.client.epay'))
  beforeEach(angular.mock.module('unitTestData'))

  beforeEach(function() {
    inject(function($injector) {
      epayUIState = $injector.get('epayUIState')
    })
  })

  function _resolveReviewViewDataPoints(a, b, c, d) {
    const {scenario} = epayUIState._resolveReviewViewDataPoints(a, b, c, d)

    return scenario
  }

  describe('_resolveReviewViewDataPoints: initialPaymentAccount|pennCheckPaymentAccount|isSavedAccount|isCardPayment', function() {
    it('0000 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, false, false, false)).to.equal('ErrorCondition')
    })

    it('0001 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, false, false, true)).to.equal('ErrorCondition')
    })

    it('0011 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, false, true, true)).to.equal('ErrorCondition')
    })

    it('0111 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, true, true, true)).to.equal('ErrorCondition')
    })

    it('should return PennCheck1', function() {
      expect(_resolveReviewViewDataPoints(false, true, false, false)).to.equal('PennCheck1')
    })

    it('0110 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, true, true, false)).to.equal('ErrorCondition')
    })

    it('0101 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, true, true, false)).to.equal('ErrorCondition')
    })

    it('0010 should return ErrorCondition', function() {
      expect(_resolveReviewViewDataPoints(false, true, true, false)).to.equal('ErrorCondition')
    })

    it('1000 should return NoPennCheck1', function() {
      expect(_resolveReviewViewDataPoints(true, false, false, false)).to.equal('NoPennCheck1')
    })

    it('1001 should return NoPennCheck2', function() {
      expect(_resolveReviewViewDataPoints(true, false, false, true)).to.equal('NoPennCheck2')
    })

    it('1011 should return NoPennCheck4', function() {
      expect(_resolveReviewViewDataPoints(true, false, true, true)).to.equal('NoPennCheck4')
    })

    it('1111 should return PennCheck4', function() {
      expect(_resolveReviewViewDataPoints(true, true, true, true)).to.equal('PennCheck4')
    })

    it('1100 should return PennCheck1', function() {
      expect(_resolveReviewViewDataPoints(true, true, false, false)).to.equal('PennCheck1')
    })

    it('1110 should return PennCheck3', function() {
      expect(_resolveReviewViewDataPoints(true, true, true, false)).to.equal('PennCheck3')
    })

    it('1101 should return PennCheck2', function() {
      expect(_resolveReviewViewDataPoints(true, true, false, true)).to.equal('PennCheck2')
    })

    it('1010 should return NoPennCheck3', function() {
      expect(_resolveReviewViewDataPoints(true, false, true, false)).to.equal('NoPennCheck3')
    })
  })

  function _resolvePaymentViewScenarioName(a, b, c, d) {
    const {scenario} = epayUIState._resolvePaymentViewScenarioName(a, b, c, d)

    return scenario
  }

  describe('_resolvePaymentViewScenarioName: isPennCheck|hasSavedAccounts|canUseCreditCards|ccLimitExceeded', function() {
    it('0000 should return NoPennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(false, false, false, false)).to.equal('NoPennCheck1')
    })

    it('0001 should return NoPennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(false, false, false, true)).to.equal('NoPennCheck1')
    })

    it('0011 should return NoPennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(false, false, true, true)).to.equal('NoPennCheck1')
    })

    it('0111 should return NoPennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(false, true, true, true)).to.equal('NoPennCheck4')
    })

    it('0100 should return NoPennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(false, true, false, false)).to.equal('NoPennCheck4')
    })

    it('0110 should return NoPennCheck3', function() {
      expect(_resolvePaymentViewScenarioName(false, true, true, false)).to.equal('NoPennCheck3')
    })

    it('0101 should return NoPennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(false, true, false, true)).to.equal('NoPennCheck4')
    })

    it('0010 should return NoPennCheck2', function() {
      expect(_resolvePaymentViewScenarioName(false, false, true, false)).to.equal('NoPennCheck2')
    })

    it('1000 should return PennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(true, false, false, false)).to.equal('PennCheck1')
    })

    it('1001 should return PennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(true, false, false, true)).to.equal('PennCheck1')
    })

    it('1011 should return PennCheck1', function() {
      expect(_resolvePaymentViewScenarioName(true, false, true, true)).to.equal('PennCheck1')
    })

    it('1111 should return PennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(true, true, true, true)).to.equal('PennCheck4')
    })

    it('1100 should return PennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(true, true, false, false)).to.equal('PennCheck4')
    })

    it('1110 should return PennCheck3', function() {
      expect(_resolvePaymentViewScenarioName(true, true, true, false)).to.equal('PennCheck3')
    })

    it('1101 should return PennCheck4', function() {
      expect(_resolvePaymentViewScenarioName(true, true, false, false)).to.equal('PennCheck4')
    })

    it('1010 should return PennCheck2', function() {
      expect(_resolvePaymentViewScenarioName(true, false, true, false)).to.equal('PennCheck2')
    })
  })
})
