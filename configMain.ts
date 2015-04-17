require.config({
    baseUrl: '',

    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',
        'underscore': 'lib/underscore/underscore',
        'angular': 'lib/angular/angular.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min'
    },

    shim: {
        'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: 'underscore'
        },
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route':{
            exports: 'angular-route',
            deps:['angular']
        },
        'angular-resource':{
            exports: 'angular-resource',
            deps:['angular']
        }
    }
});

require(
    [
        'angular',
        'jquery',
        'underscore',
        'angular-route',
        'angular-resource',
        'application'
    ],
    (angular,application) => {
        'use strict';

        angular.element(document).ready(function() {
                angular.bootstrap(document, ['application']);
            }
        );
    }
);



