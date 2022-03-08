import * as angular from "angular"
import * as ngResource from "angular-resource"
import * as ngRoute from "angular-route"
import * as cookies from "angular-cookies"
import {FormsComponent} from "./components/forms/forms.component"
import {SelectFormComponent} from "./common/components/select-form/select-form.component"
import {Forms} from "./common/services/forms/forms.service"
import './core'
import { LoggingService } from './utils/logging'
import { stringUtils } from './utils/string-utils'
import './directives'

import { DeviceUtils } from "./utils"
import { findOrCreateModule } from "./ng-helpers"
import { constants } from "./core/constants"
import  "./client/epay"

let app: ng.IModule = angular.module('app', [ngResource])
    .component('forms', new FormsComponent())
    .component('selectForm', new SelectFormComponent())

Forms.init(app);

// import './utils'

console.dir(constants)

findOrCreateModule('app.core', ['app'])
.constant('CONSTANTS', constants)

findOrCreateModule('app.utils', ['app'])
.service('loggingService', LoggingService)
.service('stringUtils', stringUtils)
.factory('deviceUtils', DeviceUtils)


