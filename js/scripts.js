//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}



$(document).ready(function () {
  $().submit(function (event) {
    event.preventDefault();

    var ticket = new Ticket()


  })


});