var employeeArray = [];
var totalSalary = 0;
var monthlyCost = 0;

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
    calculateSalaries(salary)
  }

  function clearInputs() {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.title = "";
    $scope.salary = "";
    $scope.id = "";
  }

  function calculateSalaries(salary) {
    var pay = parseFloat(salary);
    totalSalary += pay;
    monthlyCost = totalSalary / 12;
    $scope.totalSalary = totalSalary;
    $scope.monthlyCost = monthlyCost;
  }
}]);

function Employee(first, last, title, salary, id) {
  this.first = first;
  this.last = last;
  this.title = title;
  this.salary = salary;
  this.id = id;
}
