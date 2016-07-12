'use strict';

myResume.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('experience', {
        url: '/experience',
        templateUrl: 'app/templates/experience/experience.html',
        controller: 'ExperienceCtrl'
    });
}])

.controller('ExperienceCtrl', [function() {

}]);
