'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.components.version',
  'myApp.home',
  'myApp.about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'home/home.html', controller: 'home-controller'});
  $routeProvider.when('/about', {templateUrl: 'about/about.html', controller: 'about-controller'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
