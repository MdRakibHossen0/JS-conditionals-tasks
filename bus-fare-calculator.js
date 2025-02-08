/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 60;
let ticketPrice = 800;

let isStudent = (ticketPrice * 50) / 100;

if (age < 10) {
  console.log("Congratulation You get free ticket");
} else if (age > 10 && age <= 25) {
  let isStudent = (ticketPrice * 50) / 100;
  console.log(
    "You get a 50% discount. After discount ticket far is: " +
      (ticketPrice - isStudent)
  );
} else if (age >= 60) {
  console.log(
    "You get 15% Discount price: " + (ticketPrice - (ticketPrice * 15) / 100)
  );
} else {
  console.log("Regular ticket price: " + ticketPrice);
}
