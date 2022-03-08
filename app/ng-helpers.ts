import * as angular from 'angular'

export function findOrCreateModule(moduleName, deps) {
    deps = deps || []
    try {
      return angular.module(moduleName)
    } catch (error) {
      return angular.module(moduleName, deps)
    }
  }