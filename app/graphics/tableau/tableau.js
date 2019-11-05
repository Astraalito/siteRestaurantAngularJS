var  myModule = angular.module('myApp');

myModule.directive('restaurants', [function () {
    return{
        templateUrl:'/graphics/restaurants/tableau.html'
    };
}]);