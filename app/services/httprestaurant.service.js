'use strict';
angular.module("myApp.service").factory('httprestaurantservice',['$resource', function($resource){
    return $resource('data/restaurants/:id.json');
}]);