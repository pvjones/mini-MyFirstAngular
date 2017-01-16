angular.module('friendsList').controller('mainCtrl', function($scope) {
//We are ADDING A CONTROLLER PROPERTY to our module app

$scope.friends = ['John', 'Mark', 'Paige', 'Maron']

$scope.addFriend = function(name) {
  var newFriend = name;
  $scope.friends.push(newFriend);

  $scope.friendName = '';
}


});