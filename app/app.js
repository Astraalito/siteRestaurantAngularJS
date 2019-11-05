'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [])
.controller('MainController', ['$scope', function($scope){
  /*variable de test*/
  $scope.jpp = 'Antoine';

  $scope.restaurants=[{
    nom : 'DeliceLand',
    numVoie : '3 ',
    libVoie : 'Boulevard Gambetta ',
    date : '04/11/2019',
    note : '5/5',
    proprio : 'Jean Horacio Délice',
    mail : 'contact.deliceMachine@wanadoo.fr',
    commentaire: 'Vraiment un super resto. Choqué pas déçu. Bisous, Jeannine.'
  },
    {
      nom : 'Papa John',
      numVoie : '6 ',
      libVoie : ' Avenue des Martyrs ',
      date : '04/04/1996',
      note : '3,5/5',
      proprio : 'John Doe',
      mail : 'onsepaskiseh@aol.com',
      commentaire: 'Les pizzas étaient bonnes.'
    },
    {
      nom : 'Bu/Fais Maison',
      numVoie : '12 ',
      libVoie : 'Cours de la libération ',
      date : '15/06/2004',
      note : '2/5',
      proprio : 'Skylar White',
      mail : ' unjourjetrouveraiuneadressemail@hotmail.fr',
      commentaire: 'Rarement mangé de si bonne choucroute.'
    }];

}]);