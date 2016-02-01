/**
 * Created by William on 1/30/2016.
 */
'use strict';

angular.module('myApp.register', ['ngRoute'])

    // route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'register/register.html',
            controller: 'RegisterCtrl'
        });
    }])

    // controller
    .controller('RegisterCtrl', [function() {

    }]);