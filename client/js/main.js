var app = angular.module('myApp', ['myApp.controllers', 'myApp.factories', 'ngRoute', 'ngResource']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'contactViewController'
        })
        .when('/posts/:id', {
            templateUrl: 'views/specific.html',
            controller: 'SingleContactControl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
