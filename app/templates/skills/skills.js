'use strict';

myResume.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('skills', {
        url: '/skills',
        templateUrl: 'app/templates/skills/skills.html',
        controller: 'SkillsCtrl'
    });
}])

.controller('SkillsCtrl', [function() {

}]);
