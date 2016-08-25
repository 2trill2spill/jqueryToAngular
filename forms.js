var employeeArray = [];

var app = angular.module("app", []);

app.controller("formController", ["$scope", function($scope) {
  console.log("Form controller works")

  $scope.handleSubmit = function() {
    var first = $scope.firstName;
    var last = $scope.lastName;
    var title = $scope.title;
    var salary = $scope.salary;
    var id = $scope.id;
    var employee = new Employee(first, last, title, salary, id)
    employeeArray.push(employee);
    $scope.employeeArray = employeeArray;
    clearInputs();
  }

  function clearInputs() {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.title = "";
    $scope.salary = "";
    $scope.id = "";
  }
}]);

function Employee(first, last, title, salary, id) {
  this.first = first;
  this.last = last;
  this.title = title;
  this.salary = salary;
  this.id = id;
}
