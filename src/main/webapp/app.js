'use strict';

var app = angular.module('myApp', []);

app.controller("myController", function ($scope, personFactory) {
    $scope.persons = personFactory.getPersons();
});

app.factory('personFactory', function () {

    var persons = [];
    persons.push({firstName: 'Peter', lastName: 'Smith'});
    persons.push({firstName: 'Johnny', lastName: 'Hansen'});
    persons.push({firstName: 'Anders', lastName: 'Severinsen'});
    persons.push({firstName: 'Anne', lastName: 'Birgersen'});
    
    return {
        getPersons: function() {
            return persons;
        }
    };

});

app.filter("lastFirst", function() {
   return function(item) {
       return item.lastName + ", " + item.firstName;
   };
});