'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/beers', {templateUrl: 'partials/partial1.html', controller: 'BeerRetrieveController'});
  $routeProvider.when('/users', {templateUrl: 'partials/partial2.html', controller: 'UserRetrieveController'});
  $routeProvider.otherwise({redirectTo: '/users'});
}]);
