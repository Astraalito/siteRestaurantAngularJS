var  myModule = angular.module('myApp');

myModule.directive('tableau', [function () {
    return{
        scope:{
            jpp: '=',
            restaurants: '=lesrestaurants',
            nom: '='
        },
        templateUrl:'/graphics/tableau/tableau.html',
        link: function (scope, element, attrs) {
            scope.IsVisible = false;

            scope.selectRestaurants = function (r) {
                scope.restaurant = r;
            };
            scope.showThis = function(){
                this.IsVisible = true;
            };
            scope.hideThis = function(){
                this.IsVisible = false;
            };
        },
    };
}]);