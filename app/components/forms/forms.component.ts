'use strict';
import * as angular from "angular";
import {IForm} from '../../common/components/select-form/form';

export class FormsComponentController implements ng.IComponentController {
    public availableForms: IForm[];
    public forms: string[];
    public loaded: boolean = false;
    public static $inject: string[] = ["formsResource"];

    constructor(private formsResource: any) {}

    public $onInit() {
        let ctrl = this;
        ctrl.formsResource.query().$promise.then(function (response: any) {
            ctrl.forms = response.selectedForms;
            ctrl.availableForms = response.availableForms;
            ctrl.loaded = true;
        });
    }
}

export class FormsComponent implements ng.IComponentOptions {
    public controller: ng.Injectable<ng.IControllerConstructor>;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = FormsComponentController;
        this.controllerAs = "$ctrl";
        this.templateUrl = 'app/components/forms/forms.html';
    }
}