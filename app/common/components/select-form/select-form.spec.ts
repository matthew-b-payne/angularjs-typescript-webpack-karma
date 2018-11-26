import * as angular from "angular";
import "angular-mocks";
import {SelectFormComponentController} from "./select-form.component"
import {IForm} from "./form"

describe('SelectFormComponent', () => {
    let $scope:any;
    let compiledElement:any;
    let httpBackend:any;

    beforeEach(angular.mock.inject(($compile:ng.ICompileService,
                                    $templateCache: ng.ITemplateCacheService,
                                    _$rootScope_:ng.IRootScopeService,
                                    $httpBackend: ng.IHttpBackendService) => {
        httpBackend = $httpBackend;

        $scope = _$rootScope_.$new();

        $scope.availableForms = [
            {name: 'f1', required: true},
            {name: 'f2', required: false},
            {name: 'f3', required: true},
            {name: 'f4', required: false},
            {name: 'f5', required: false}
        ];

        $scope.forms = ['f5'];

        let element = angular.element('<select-form available-forms="availableForms" ng-model="forms" ></select-form>');
        compiledElement = $compile(element)($scope);
        $scope.$digest();
        console.log(compiledElement);
    }));

    describe('when the template is compiled', () => {
        it('then the component should be defined.', () => {
             expect(compiledElement).toBeDefined();
        });
    });
});

/*
describe('SelectFormComponentController', function () {
    let selectFormController:SelectFormComponentController;
    let timeout:any;
    beforeEach(angular.mock.module('app'));

    beforeEach(inject((_$timeout_:ng.ITimeoutService) => {
            timeout = _$timeout_;
            selectFormController = new SelectFormComponentController();
            selectFormController.availableForms = [
                {name: 'f1', required: true},
                {name: 'f2', required: false},
                {name: 'f3', required: true},
                {name: 'f4', required: false},
                {name: 'f5', required: false}
            ];
            timeout(function () {
                selectFormController.ngModel.$modelValue = ['f5'];
                selectFormController.$onInit();
            });
        })
    );

    it('selected forms should be initialized properly', function () {
        timeout(function () {
                expect(selectFormController.selectedForms).toEqual([
                    {name: 'f1', required: true},
                    {name: 'f3', required: true},
                    {name: 'f5', required: false}
                ]);
            }
        );
    });
});
*/
