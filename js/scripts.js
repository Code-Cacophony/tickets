//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.price = 0;
}

Ticket.prototype.displayPrice = function () {
  if (this.time === 1) {
    this.price = 15.00;
  } else {
    this.price = 8.00;
  }
  if (this.age == 2) {
    this.price = this.price * 0.8;
  }
}





Ticket.prototype.displayTicket = function () {

}


//UI logic
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
    console.log(ticket.displayPrice());




  });


});

//Create a ticket that includes movie, time, age, and price
//Calculate price and display the ticket


//have price determined by time of showing
//create new var and if/else that will subtract from the price if "over 65" is chosen