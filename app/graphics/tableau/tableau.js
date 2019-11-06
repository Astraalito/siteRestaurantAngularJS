var  myModule = angular.module('myApp');

myModule.directive('tableau', [function () {
    return{
        scope:{
            jpp: '=',
            restaurants: '=lesrestaurants'
        },
        templateUrl:'/graphics/tableau/tableau.html',
        link: function (scope, element, attrs) {
            scope.IsVisible = false;

            scope.selectRestaurants = function (r) {
                scope.restaurant = r;
                console.log(r);
            };
            scope.showThis = function(){
                this.IsVisible = true;
                console.log('IsVisible now true');
            };
            scope.hideThis = function(){
                this.IsVisible = false;
                console.log('IsVisible now false');
            };
        },
    };
}]);