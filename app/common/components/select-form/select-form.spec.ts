import * as angular from "angular";
import "angular-mocks";
import {SelectFormComponentController} from "./select-form.component"
import {IForm} from "./form"

describe('SelectFormComponentController', function () {
    let selectFormController:SelectFormComponentController;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject((_$timeout_: ng.ITimeoutService) => {
            selectFormController = new SelectFormComponentController(_$timeout_);
            selectFormController.availableForms = [
                {name: 'f1', required: true},
                {name: 'f2', required: false},
                {name: 'f3', required: true},
                {name: 'f4', required: false},
                {name: 'f5', required: false}
            ];
            selectFormController.ngModel.$modelValue = ['f5'];
        })
    );

    it('should be initialized properly', function () {
        selectFormController.$onInit();
        expect(selectFormController.selectedForms).toBe([
            {name: 'f1', required: true},
            {name: 'f3', required: true},
            {name: 'f5', required: false}
        ]);
    });
});
