import * as angular from 'angular'
describe('stringUtils', function() {
    var stringUtils
  
    beforeEach(function() {
      angular.mock.module('app.utils')
  
      angular.mock.inject(function(_stringUtils_) {
        stringUtils = _stringUtils_
      })
    })
  
    describe('.pluralize', function() {
      it('Turns "beefaroni" into "beefaronis"', function() {
        expect(stringUtils.pluralize('beefaroni')).toEqual('beefaronis')
      })
  
      it('Turns "Dependency" into "Dependencies"', function() {
        expect(stringUtils.pluralize('Dependency')).toEqual('Dependencies')
      })
    })
  
    describe('containsAny', function() {
      it('searches a string to see if any part of that string is contained in the passed array', function() {
        expect(stringUtils.containsAny('Some place warm.  A place where the beer flows like wine.', ['I got worms', 'Seabass said that?', 'We landed on the moon!!!', 'flows like wine', 'Did you pay the gas man?']))
        .toEqual('flows like wine')
      })
    })
  })
  