'use strict';

angular.module('UserControllers', []).
  controller('UserCreateController', ['$scope', function ($scope) {
    
  }]).
  controller('UserRetrieveController', ['$scope', '$http', function ($scope, $http) {
    console.log('UserRetrieveController');

    var url = 'https://api.github.com/users/suissa';
    var method = 'GET';
    $http({
      url: url,
      method: method
    }).
    success(function(data){
      console.log('Data: ', data);
      $scope.user = data;
    }).
    error(function(err){
      console.log('Erro: ', err);
    })
    
  }]).
  controller('UserUpdateController', ['$scope', function ($scope) {
    
  }]).
  controller('UserDeleteController', ['$scope', function ($scope) {
    
  }]);
