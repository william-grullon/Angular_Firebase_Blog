'use strict';
 
angular.module('myApp.home', ['ngRoute'])
 
//route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// controller
.controller('HomeCtrl', [function() {
 
}]);