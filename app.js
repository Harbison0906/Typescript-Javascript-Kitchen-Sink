//variable for my name//
var myName = 'Seth';
//constant for number of U.S. states//
var states = 50;
//variabe for sum of 5 and 4//
var sum = 5 + 4;
//alert window says 'Hello World!//
function sayHello() {
    alert('Hello World!');
}
sayHello();
//alert window notifies if user is under 21//
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you are not old enough to view this page!");
    }
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
//display favorite vegetables in console//
var favVeggies = ['green peppers', 'asparagus', 'onions', 'potatoes', 'squash'];
var count = 0;
while (count < favVeggies.length) {
    console.log(favVeggies[count]);
    count++;
}
var friends = [
    { name: 'Ryan', age: 23 },
    { name: 'Justin', age: 20 },
    { name: 'Michael', age: 25 },
    { name: 'Aaron', age: 18 },
    { name: 'Jeremy', age: 30 }
];
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
function getLength(word) {
    if (word.length % 2 === 0) {
        console.log('The world is nice and even.');
    }
    else {
        console.log('The world is an odd place.');
    }
}
getLength('Hello World');
