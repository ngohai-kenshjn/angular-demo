'use strict';

/* Directives */


angular.module('myApp.components.version', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
