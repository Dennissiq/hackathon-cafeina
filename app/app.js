var app = angular.module('MainApp', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.hello = 'Hello world!';
}]);