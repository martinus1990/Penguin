/// <reference path="./lib/scripts/angular.d.ts" />

import home = require('./home/controller/HomeController');
import angular = require('angular');

var application = angular.module('application', ['ngRoute', 'ngResource']);

application.config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
        when('/myPage', { controller: home, templateUrl: home.partialUrl}).
        otherwise({ redirectTo: '/myPage' });
});

export = application;
