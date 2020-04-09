//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.calculatePrice = function () {


}

Ticket.prototype.displayTicket = function () {

}



$(document).ready(function () {
  $("#user-input").submit(function (event) {
    event.preventDefault();

    var movie = parseInt($("#movie").val());
    var time = parseInt($("#time").val());
    var age = parseInt($("#age").val());

    var ticket = new Ticket(movie, time, age);

    console.log(movie);
    console.log(time);
    console.log(age);
    console.log(ticket);


  });


});

//Create a ticket that includes movie, time, age, and price
//Calculate price and display the ticket