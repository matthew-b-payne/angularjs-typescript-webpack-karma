import * as angular from "angular";
import "angular-mocks";
import {SelectFormComponentController} from "./select-form.component"
import {IForm} from "./form"

describe('SelectFormComponent', () => {
    let $scope:any;
    let compiledElement:any;
    let componentHtml:string = '<select-form available-forms="availableForms" ng-model="forms" ></select-form>';
    let requiredForm:IForm = {name: 'requiredForm', required: true};
    let notRequiredForm:IForm = {name: 'notRequiredForm', required: false};
    let testForms:IForm[] = [
        {name: 'f1', required: true},
        {name: 'f2', required: false},
        {name: 'f3', required: true},
        {name: 'f4', required: false},
        {name: 'f5', required: false}
    ];

    beforeEach(angular.mock.module('app', 'app/common/components/select-form/select-form.html'));

    describe('when the template is compiled then', () => {
        beforeEach(angular.mock.inject(($compile:ng.ICompileService,
                                        _$rootScope_:ng.IRootScopeService) => {
            $scope = _$rootScope_.$new();

            $scope.availableForms = testForms.slice();
            $scope.forms = ['f5'];
            compiledElement = $compile(componentHtml)($scope);
            $scope.$digest();
        }));

        it('the component should be defined', () => {
            expect(compiledElement).toBeDefined();
        });

        it('the correct number of selects should be displayed', () => {
            expect(compiledElement.find('select').length).toEqual(3);
        });
    });

    describe('required form', () => {
        beforeEach(angular.mock.inject(($compile:ng.ICompileService,
                                        _$rootScope_:ng.IRootScopeService) => {
            $scope = _$rootScope_.$new();

            $scope.availableForms = [requiredForm];
            $scope.forms = [];
            compiledElement = $compile(componentHtml)($scope);
            $scope.$digest();
        }));

        it('should be disabled', () => {
            expect(compiledElement[0].querySelector('select')[0].disabled).toEqual(true);
        });

        it('the "Delete" btn should not be displayed', () => {
            expect(compiledElement[0].querySelector('#delete-btn')).toBeNull();
        });
    });

    describe('not required form', () => {
        beforeEach(angular.mock.inject(($compile:ng.ICompileService,
                                        _$rootScope_:ng.IRootScopeService) => {
            $scope = _$rootScope_.$new();

            $scope.availableForms = [notRequiredForm];
            $scope.forms = [];
            compiledElement =
                $compile('<select-form available-forms="availableForms" ng-model="forms" ></select-form>')($scope);
            $scope.$digest();
        }));

        it('should not be disabled', () => {
            expect(compiledElement[0].querySelector('select')[0].disabled).toEqual(false);
        });

        it('the "Delete" btn should be displayed', () => {
            expect(compiledElement[0].querySelector('#delete-btn')).not.toBeNull();
        });
    });

    describe('when all forms are selected', () => {
        beforeEach(angular.mock.inject(($compile:ng.ICompileService,
                                        _$rootScope_:ng.IRootScopeService) => {
            $scope = _$rootScope_.$new();

            $scope.availableForms = testForms.slice();
            $scope.forms = testForms.map((form:IForm) => {
                return form.name;
            });
            compiledElement =
                $compile('<select-form available-forms="availableForms" ng-model="forms" ></select-form>')($scope);
            $scope.$digest();
        }));

        it('only selected option should be available for selection', () => {
            let options = compiledElement[0].querySelector('select').options;
            expect(options.length).toEqual(2);
            expect(options[0].disabled).toEqual(true);
            expect(options[1].disabled).toEqual(false);
            expect(options[1].value).toEqual($scope.forms[0]);
        });

        it('the "Add" btn should not be displayed', () => {
            expect(compiledElement[0].querySelector('#add-btn')).toBeNull();
        });
    });

    describe('SelectFormComponentController', function () {
        let selectFormController:SelectFormComponentController;
        let timeout:any;

        beforeEach(inject((_$timeout_:ng.ITimeoutService) => {
                timeout = _$timeout_;
                selectFormController = new SelectFormComponentController();
                selectFormController.availableForms = testForms.slice();
                timeout(function () {
                    selectFormController.ngModelCtrl.$modelValue = ['f5'];
                    selectFormController.$onInit();
                });
            })
        );

        it('required forms should be added while initialization', function () {
            timeout(function () {
                expect(selectFormController.ngModelCtrl.$modelValue).toEqual(['f1', 'f3', 'f5']);
                expect(selectFormController.selectedForms).toEqual([
                    {name: 'f1', required: true},
                    {name: 'f3', required: true},
                    {name: 'f5', required: false}
                ]);
            });
        });

        it('canAddForm() method should work properly', function () {
            timeout(function () {
                expect(selectFormController.canAddForm()).toEqual(true);
                $scope.availableForms = testForms.slice();
                $scope.forms = testForms.map((form:IForm) => {
                    return form.name;
                });
                expect(selectFormController.canAddForm()).toEqual(false);
            });
        });

        it('addForm() method should work properly', function () {
            timeout(function () {
                selectFormController.addForm();
                expect(selectFormController.ngModelCtrl.$modelValue).toEqual(['f1', 'f3', 'f5']);
                expect(selectFormController.selectedForms.length).toEqual(4);
            });
        });

        it('canDeleteLastForm() method should work properly', function () {
            timeout(function () {
                expect(selectFormController.canDeleteLastForm()).toEqual(true);
                selectFormController.deleteForm();
                expect(selectFormController.canDeleteLastForm()).toEqual(false);
            });
        });

        it('deleteForm() method should work properly', function () {
            timeout(function () {
                selectFormController.addForm();
                expect(selectFormController.ngModelCtrl.$modelValue).toEqual(['f1', 'f3']);
                expect(selectFormController.selectedForms).toEqual([
                    {name: 'f1', required: true},
                    {name: 'f3', required: true}
                ]);
            });
        });

        it('getAvailableForms() method should work properly', function () {
            timeout(function () {
                expect(selectFormController.getAvailableForms({name: 'f5', required: false})).toEqual([
                    {name: 'f2', required: false},
                    {name: 'f4', required: false},
                ]);
            });
        });

        it('onFormSelect() method should work properly', function () {
            timeout(function () {
                selectFormController.selectedForms.push({name: 'f2', required: false});
                selectFormController.onFormSelect();
                expect(selectFormController.ngModelCtrl.$modelValue).toEqual(['f1', 'f3', 'f5', 'f4']);
            });
        });
    });
});
