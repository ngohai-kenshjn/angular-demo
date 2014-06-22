'use strict';

/* Directives */


angular.module('myApp.customer').
    directive('customerDetail',[ function () {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "../app/components/customer-detail/customer-detail.html";
        return directive;
    }]);
