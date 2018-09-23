var app = angular.module("myAppOne", []);
app.controller("myCtrl", function($scope) {
  $scope.records = [
    "Cricket",
    "Football",
    "Tennis",
    "Hockey",
  ]
});