//variable for my name//
let myName = 'Seth';

//constant for number of U.S. states//
const states = 50;

//variabe for sum of 5 and 4//
let sum = 5 + 4;

//alert window says 'Hello World!//
function sayHello() {
  alert('Hello World!');
}

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry "+ name + ", you are not old enough to view this page!")
  }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);