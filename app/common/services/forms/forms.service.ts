'use strict';
import * as angular from "angular";

export class Forms {
    public static init(app: ng.IModule) {
        app.service('formsResource', ['$resource',
            function ($resource: any) {
                return $resource('forms.json', {}, {
                    query: {
                        method: 'GET',
                        isArray: false
                    }
                });
            }
        ]);
    }
}

