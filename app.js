'use strict'; 

console.log('app is running');

let name = prompt('What is you name?');
console.log(user);
if (user === null) {
  alert('You need to provide your name');
  user = prompt('No really what is your name?');
}

let color = prompt('Can you guess my favorite color?');

switch (color) {
case 'red':
  alert('Thats right!');
  break;
case 'blue':
  alert('blue is great, but no');
  break;
case 'yellow':
  alert('definitely not yellow');
  break;
default:
  alert('Oh interesting, I don\'t know that color');
}

console.log('Next question');

let movie = prompt('What is one of my favorite action movies?');
console.log(Movie); 
if (typeof(movie) === 'string') {
  movie = movie.toLowerCase(); 
}

if (movie === 'con air') {
  alert('That is a great Movie!');
} else if (movie === 'the rock') {
  alert('Another great Movie');
} else if (movie === 'face off') {
  alert('One of my faves!');
} else {
  alert('No, I don\'t know that movie!');
}

let music = prompt('Guess my favorite genre of music!');

switch (music) {
case 'rap':
  alert('I love rap but it\'s not my favorite.');
  break;
case 'jazz':
  alert('Not quite');
  break;
case 'rock':
  alert('Not even close');
  break;
case 'r&b':
  alert('Yes!');
  break;
default:
  alert('that isn\'t right');
}

let city = prompt('What is my favorite city to visit?');

switch (city) {
case 'New York':
  alert('No way');
  break;
case 'Atlanta':
  alert('Nope');
  break;
case 'San Francisco':
  alert('Not for me!');
  break;
case 'Miami':
  alert('Home sweet home');
  break;
default:
  alert('that isn\'t right');
}

let food = prompt('What is one of my favorite foods'); 
if (typeof(food) === 'string') {
  food = food.toLowerCase(); 
}

if (food === 'burgers') {
  alert('That is my favorite food');
} else if (food === 'pizza') {
  alert('Close!');
} else if (food === 'steak') {
  alert('I love steak!');
} else {
  alert('No, I don\'t think i\'ve tried that');
}

alert("You have 4 guesses. Guess 1-10")

let answer = 3;
let guess = prompt("guess a number");

for (i=0; i<4; i++){
  if (answer == guess){
    alert("Congrats, You Win!");
    break;
  }else{
    guess= prompt("Wrong answer :(");
  }
}
