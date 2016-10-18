(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.reviews = [
                        "Angular is pretty cool",
                        "It is totes awesome sauce",
                        "meh... except the Ember munchkin is next level."
                      ];

    $scope.addReview = function(newText) {
      $scope.reviews.push(newText);
    };

    window.scope = $scope;
  });
}());