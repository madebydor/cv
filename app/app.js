'use strict';

// Declare app level module which depends on views, and components
var myResume = angular.module('myResume', [
  'ui.router'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);

console.log('Oh hi there again, little explorer.');
console.log('For any question feel free to contact me.');
