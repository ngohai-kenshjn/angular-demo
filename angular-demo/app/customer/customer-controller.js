'use strict';

/* Controllers */

angular.module('myApp.customer', [])
    .controller('customer-controller', function ($scope) {
        var customers = [
            {
                first_name: "fasfa",
                middle_name: "fasfa",
                last_name: "fasfa"
            },
            {
                first_name: "fasfa",
                middle_name: "fasfa",
                last_name: "fasfa"
            }
        ];
        $scope.customers = customers;
    });
