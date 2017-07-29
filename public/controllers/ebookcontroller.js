var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");


var refresh = function() {
  $http.get('/fs.files').success(function(response) {
    console.log("I got the data I requested");
    $scope.fs.files = response;
    $scope.ebookgridfs = "";
  });
};

refresh();

$scope.addebookgridfs = function() {
  console.log($scope.ebookgridfs);
  $http.post('/fs.files', $scope.ebookgridfs).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/fs.files/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/fs.files/' + id).success(function(response) {
    $scope.ebookgridfs = response;
  });
};  

$scope.update = function() {
  console.log($scope.ebookgridfs._id);
  $http.put('/fs.files/' + $scope.ebookgridfs._id, $scope.ebookgridfs).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.ebookgridfs = "";
}

}]);﻿