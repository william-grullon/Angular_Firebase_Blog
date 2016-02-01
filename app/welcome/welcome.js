/**
 * Created by William on 1/31/2016.
 */
'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope','CommonProp', function($scope,CommonProp) {
    $scope.username = CommonProp.getUser();
}]);