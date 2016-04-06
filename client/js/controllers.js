var controllers = angular.module('myApp.controllers', []);

controllers.controller('contactViewController', ['$scope', 'ContactGetter', '$location', function($scope, ContactGetter, $location) {

    $scope.getContacts = function() {
        ContactGetter.query().$promise.then(function(data) {
            $scope.contacts = data;
        })
    }
    
    $scope.clearForms = function() {
        $scope.name = '';
        $scope.email = '';
        $scope.phone = '';
    }
    
    $scope.submitContact = function() {
        var newContact = {
            name: $scope.name,
            email: $scope.email,
            phone: $scope.phone
        }
        ContactGetter.save(newContact).$promise.then(function() {
            $scope.clearForms()
        }
        ).then(function() {
            $location.path('#/')
        });
    }
    
    $scope.getContacts();
}]);

controllers.controller('SingleContactControl', ['$scope', '$routeParams', 'ContactGetter', function($scope, $routeParams, ContactGetter) {
   var contactId = $routeParams.id;
   console.log('I need to get this contact:');
   console.log(contactId);
    $scope.getContact = function() {
        ContactGetter.get({ id: contactId }).$promise.then(function(data) {
            $scope.contact = data;
        })
    }
    $scope.getContact();
}]);