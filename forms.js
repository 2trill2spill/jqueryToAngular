$(document).ready(function() {
    var array = [];
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });
      
      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);
    });

    var totalSalary = 0;
    var monthlyCost = 0;

    function appendDom(values) {
      var lastName = values["employeelastname"]
      var firstName = values["employeefirstname"]
      var jobTitle = values["jobTitle"]
      var salary = values["salary"]
      var id = values["id"]

      var income = Number(salary)

      totalSalary += income;
      monthlyCost = Math.round(totalSalary / 12);

      $('#container').append('<div></div>');
      var $el = $('#container').children().last();
      $el.append('<p>' + firstName + ' ' + lastName + '</p>');
      var $el = $('#container').children().last();
      $el.append('<p>' + "Tile:" + jobTitle + '</p>');
      var $el = $('#container').children().last();
      $el.append('<p>' + "ID:" + id + '</p>');
      var $el = $('#container').children().last();
      $el.append('<p>' + "Salary: $" + salary + '</p>');
      var $el = $('#container').children().last();
      $el.append('<p>' + "Total salary: $" + totalSalary + '</p>');
      var $el = $('#container').children().last();
      $el.append('<p>' + "Monthly salary cost: $" + monthlyCost + '</p>');
    }

});
