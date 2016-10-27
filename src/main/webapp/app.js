'use strict';

var app = angular.module('myApp', ['CustomFilterModule']);

app.controller("myController", function ($scope, personFactory, caseService) {
    $scope.persons = personFactory.getPersons();
    $scope.camelCase = function (string) {
        return caseService.camelCase(string);
    };
    $scope.titleCase = function(string) {
        return caseService.titleCase(string);
    };
    $scope.dashCase = function(string) {
        return caseService.dashCase(string);
    };
    
});

app.factory('personFactory', function () {

    var persons = [];
    persons.push({firstName: 'Peter', lastName: 'Smith'});
    persons.push({firstName: 'Johnny', lastName: 'Hansen'});
    persons.push({firstName: 'Anders', lastName: 'Severinsen'});
    persons.push({firstName: 'Anne', lastName: 'Birgersen'});

    return {
        getPersons: function () {
            return persons;
        }
    };

});

//1.
var customFilterApp = angular.module('CustomFilterModule', []);
customFilterApp.filter("lastFirst", function () {
    return function (item) {
        return item.lastName + ", " + item.firstName;
    };
});

//2.
app.directive('loginForm', function () {
    return {
        restrict: 'AE',
        scope: {
            header: '@header'
        },
        templateUrl: 'login-form.html'


    };
});

app.service("caseService", function () {
    this.camelCase = function (string) {
        return string.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0)
                return "";
            return index == 0 ? match.toLowerCase() : match.toUpperCase();
        });
    };

    this.titleCase = function (string) {
        return string.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    
    this.dashCase = function(string) {
      string = string.toLowerCase();
      var res = string.replace(/ /g, "-");
      return res;
    };
    
    
});