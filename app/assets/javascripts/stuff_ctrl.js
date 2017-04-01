(function(){
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.reviews = [
                        "Angular is pretty cool",
                        "It allows two way binding",
                        "And is an example of dependency injection."
                      ];

    $scope.addReview = function(newText) {
      $scope.reviews.push(newText);
    };

    window.scope = $scope;
  });
}());