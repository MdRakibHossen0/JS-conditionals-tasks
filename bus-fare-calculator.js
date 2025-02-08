/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let ticketPrice = 800;


if(age < 10 ){
    console.log('Congratulation You get free ticket');
}
else if( age > 10 && age <= 25){
   let discount50 = (ticketPrice * 50) / 100;
   console.log("You get a 50% discount. After discount ticket far is: " + (ticketPrice -discount50) );

}

else if(age >= 60){
console.log('You get 15% Discount');
}
else{
    console.log("Regular ticket price: " + ticketPrice );
}

