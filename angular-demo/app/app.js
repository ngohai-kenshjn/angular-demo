'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.version',
    'myApp.home',
    'myApp.customer',
    'myApp.about'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: 'home/home.html',
                controller: 'home-controller'
            })
            .when('/about',
            {
                templateUrl: 'about/about.html',
                controller: 'about-controller'
            })
            .when('/customer',
            {
                templateUrl: 'customer/customer.html',
                controller: 'customer-controller'
            })
            .otherwise({redirectTo: '/home'});
    }]);
