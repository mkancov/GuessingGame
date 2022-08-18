"use strict";

function guessingGame() {
  let rightAnswersCount = 0;

  console.log("app is running");

  let user = prompt("What is you name?");
  console.log(user);
  if (user === null || user === " ") {
    alert("You need to provide your name");
    user = prompt("No really what is your name?");
  }

  let color = prompt("Can you guess my favorite color?");

  switch (color) {
    case "red":
      alert("Thats right!");
      rightAnswersCount++;
      break;
    case "blue":
      alert("blue is great, but no");
      break;
    case "yellow":
      alert("definitely not yellow");
      break;
    default:
      alert("Oh interesting, I don't know that color");
  }

  console.log("Next question");

  let movie = prompt("What is one of my favorite action movies?");
  console.log(movie);
  if (typeof movie === "string") {
    movie = movie.toLowerCase();
  }

  if (movie === "con air") {
    alert("That is a great Movie!");
    rightAnswersCount++;
  } else if (movie === "the rock") {
    alert("Another great Movie");
    rightAnswersCount++;
  } else if (movie === "face off") {
    alert("One of my faves!");
    rightAnswersCount++;
  } else {
    alert("No, I don't know that movie!");
  }

  let music = prompt("Guess my favorite genre of music!");

  switch (music) {
    case "rap":
      alert("I love rap but it's not my favorite.");
      break;
    case "jazz":
      alert("Not quite");
      break;
    case "rock":
      alert("Not even close");
      break;
    case "r&b":
      alert("Yes!");
      rightAnswersCount++;
      break;
    default:
      alert("that isn't right");
  }

  let city = prompt("What is my favorite city to visit?");

  switch (city) {
    case "new york":
      alert("No way");
      break;
    case "atlanta":
      alert("Nope");
      break;
    case "san francisco":
      alert("Not for me!");
      break;
    case "miami":
      alert("home sweet home");
      rightAnswersCount++;
      break;
    default:
      alert("that isn't right");
  }

  let food = prompt("What is one of my favorite foods");
  if (typeof food === "string") {
    food = food.toLowerCase();
  }

  if (food === "burgers") {
    alert("That is my favorite food");
    rightAnswersCount++;
  } else if (food === "pizza") {
    alert("Close!");
  } else if (food === "steak") {
    alert("I love steak!");
  } else {
    alert("No, I don't think i've tried that");
  }

  alert("You have 4 guesses. Guess 1-10");

  let answer = 5;
  let guessNumber = prompt("guess a number");

  for (let i = 1; i < 4; i++) {
    if (guess == answer) {
      alert("Congrats, You Win!");
      rightAnswersCount++;
      break;
    } else if (guess < answer) {
      alert("Number is too low, Try again");
    } else if (guess > answer) {
      alert("Number is too High, Try again");
    } else {
      alert("Wrong answer :(");
    }
    guess = prompt("guess a number");
  }

  alert("You have 6 guesses. Good Luck!");
  let answers = ["miami", "new york", "oakland"];
  let guess = prompt("Guess what cities I have lived in!");

  for (let answer of answers) {
    for (let i = 0; i < 5; i++) {
      if (guess == answer) {
        alert("Congrats you win!");
        rightAnswersCount++;
        break;
      } else {
        guess = prompt("Wrong answer");
      }
    }
  }

  alert("You got: " + rightAnswersCount + "of 7 congrats!!");
}
