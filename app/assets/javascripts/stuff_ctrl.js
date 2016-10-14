(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.reviews = [
                        "Angular is cool",
                        "It is totes awesome sauce",
                        "meh... except the Ember munchkin is better."
                      ];

    $scope.addReview = function(newText) {
      $scope.reviews.push(newText);
    };

    window.scope = $scope;
  });
}());