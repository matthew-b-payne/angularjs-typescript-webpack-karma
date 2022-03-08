import * as angular from 'angular'
import "angular-mocks"
import * as sinon from 'sinon'
import { EpayMessageResolver } from './epay-message-resolver'

describe('EpayMessageResolver', function() {
  var $log = {debug: sinon.stub()}
  var epayMessageResolver: EpayMessageResolver
  var authService

  beforeEach(angular.mock.module('app.client.epay', ))
  beforeEach(angular.mock.module(function($provide) {
      // use this to mock dependencies
    $provide.factory('authService', function() {
      return {
        checkRoles: sinon.stub().returns(true),
        getSubGuid: sinon.stub().returns('my-sub-guid'),
        getSessionID: sinon.stub().returns('my-session-id'),
        isClientView: sinon.stub().returns(false),
        isAgentView: sinon.stub().returns(true),
        isHomeOfficeUser: sinon.stub().returns(true),
        isAuthenticated: sinon.stub().returns(true),
        isAClient: sinon.stub().returns(false),
        isARealClient: sinon.stub().returns(false),
      }
    })
    $provide.value('$log', $log)
  }))
  beforeEach(inject(function(_epayMessageResolver_, _authService_) {
      // use this to expose what dependencies actually resolve to
    authService = _authService_
    epayMessageResolver = _epayMessageResolver_
  }))

  describe('.resolvePremiumMessage', function() {
    it('returns a message for a know typeCode', function() {
      let msg = epayMessageResolver.resolvePremiumMessage('1')

      expect(msg).toEqual('There is a pending payment')
    })

    it('does not bomb when asked about a message for an unknown code', function() {
      let msg = epayMessageResolver.resolvePremiumMessage('98981')

      expect(msg).toBeUndefined
    })
  })

  describe('correct message when client view', function() {
    beforeEach(inject((_epayMessageResolver_, _authService_) => {
      authService.isClientView = sinon.stub().returns(true)
      authService.isHomeOfficeUser = sinon.stub().returns(false)
      epayMessageResolver.authService = authService
      epayMessageResolver = _epayMessageResolver_
    }))

    it('no message for clientView where there is for others', function() {
    //   expect(authService.isClientView.called).to.be.true
      epayMessageResolver.isClientView = true
      let msg = epayMessageResolver.resolvePremiumMessage('1')

      expect(msg).toBeUndefined
    })
  })
})
