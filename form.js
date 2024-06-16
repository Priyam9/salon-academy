angular.module('myApp', ['ngMessages'])
.controller('FormController', ['$scope', function($scope) {
  $scope.name = '';
  $scope.email = '';
  $scope.message = '';
}]);
