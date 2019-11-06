myModule.component('monform', {
    bindings:{
        restaurant: "="
    },
    templateUrl: '/graphics/formulaire/formulaire.html',
    controller:["$scope", function($scope) {
        $scope.pute = "j'vais bien te niquer tes grands morts si tu fonctionnes pas";
        $scope.FormVisible = true;

        that = this;
        this.assignRestau = function () {
            if (this.restaurants)
                this.formulaire = angular.copy(this.restaurants);
        };
        this.submit = function () {
            angular.copy(this.formulaire, this.restaurants)
        };

        this.$onInit = function () {
            this.assignRestau();
        };
        this.$onDestroy = function () {
            this.restauListener();
        };

        this.restauListener = $scope.$watch(() => this.restaurants, function () {
            that.assignRestau();
        });
    }]
});
