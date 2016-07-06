angular.module('ionicApp', ['ionic'])

.controller('DashCtrl', function($scope, $ionicListDelegate) {
  console.log("LOOOL")
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
    $ionicListDelegate.closeOptionButtons();  // this closes swipe option buttons after alert
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.delItem = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
    $ionicListDelegate.closeOptionButtons();
  };

  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
    $scope.data.showDelete = false;  // this closes delete-option buttons after delete
  };
  
  $scope.items = [];
  for (var i=0; i<30; i++) {
    $scope.items.push({ id: i});
  }
  
});