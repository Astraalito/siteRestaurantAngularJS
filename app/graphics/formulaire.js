myModule.directive('monform', ['restaurantService', function (restaurantService) {
    return{
        templateUrl: '/graphics/formulaire/formulaire.html',
        scope:{
            restaurant: "=",
        },
        link: function (scope, element, attrs) {
        scope.$watch(()=>scope.restaurant, function(){
            scope.monrestaurant=angular.copy(scope.restaurant);
            scope.myForm.$setPristine();
            });
        scope.creer=function(){
          scope.monrestaurant={};
          scope.myForm.$setPristine();
        };
        scope.valider=function(){
            angular.copy(scope.monrestaurant, scope.restaurant);
            scope.myForm.$setPristine();
        };

        scope.annuler=function(){
            scope.monrestaurant=angular.copy(scope.restaurant);
            scope.myForm.$setPristine();
        };
      }
    }
}]);
