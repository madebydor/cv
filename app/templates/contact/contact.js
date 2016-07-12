'use strict';

myResume.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'app/templates/contact/contact.html',
        controller: 'ContactCtrl'
    });
}])

.controller('ContactCtrl', [function() {

}]);
