import * as angular from 'angular'
// import './auth-module'
import { authService } from './auth-service'

angular
      .module('app.auth')
      .service('authService', authService)
