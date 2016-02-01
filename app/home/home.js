'use strict';

//View
angular.module('myApp.home', ['ngRoute','firebase'])

//route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// controller
.controller('HomeCtrl', ['$scope','$firebaseSimpleLogin',function($scope,$firebaseSimpleLogin) {
    //firebase user db
    var firebaseObj = new Firebase("https://angularpress.firebaseio.com");
    var loginObj = $firebaseSimpleLogin(firebaseObj);

    //model
    $scope.user = {};
    $scope.SignIn = function(e){
        e.preventDefault();
        var username = $scope.user.email;
        var password = $scope.user.password;
        loginObj.$login('password', {
                email: username,
                password: password
            })
            .then(function(user) {
                //Success callback
                console.log('Authentication successful');
            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
    }
}]);