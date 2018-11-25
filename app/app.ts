import * as angular from "angular";
import * as ngResource from "angular-resource";
import * as ngRoute from "angular-route";
import {FormsComponent} from "./components/forms/forms.component"
import {SelectFormComponent} from "./common/components/select-form/select-form.component"
import {Forms} from "./common/services/forms/forms.service"

'use strict';

let app: ng.IModule = angular.module('app', [ngResource])
    .component('forms', new FormsComponent())
    .component('selectForm', new SelectFormComponent());

Forms.init(app);
