'use strict';

app.controller("loginCtrl", [
  '$scope', '$http', '$location',

  function($scope, $http, $location) {

    $scope.login = function() {
      console.log('put email & password in please!!!');

    $http.post('/login', {
      email: $scope.email,
      password: $scope.password
    })
    .then(function(res) {
      console.log(res);
    })

      $location.path('/login');
    }
  }

]);
