/**
 * Created by William on 1/29/2016.
 */
'use strict';
 
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register'
]).
config(['$routeProvider', function($routeProvider) {
    //take it to home folder
    $routeProvider.otherwise({
         redirectTo: '/home'
    });
}]);