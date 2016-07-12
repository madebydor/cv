'use strict';

myResume.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('about', {
        url: '/',
        templateUrl: 'app/templates/about/about.html',
        controller: 'AboutCtrl'
    });
}])

.controller('AboutCtrl', [function() {

}]);
