var factories = angular.module('myApp.factories', []);

factories.factory('ContactGetter', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/posts/:id');
}]);