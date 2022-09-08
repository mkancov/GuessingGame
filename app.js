"use strict";

function guessingGame() {
  let rightAnswersCount = 0;

  console.log("app is running");

  let user = prompt("What is you name?");
  alert("Hello" + " " + user + " " + "welcome to the guessing game!");
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

  if (movie === "Gladiator") {
    alert("That is a great Movie!");
    rightAnswersCount++;
  } else if (movie === "Spiderman") {
    alert("Another great Movie");
    rightAnswersCount++;
  } else if (movie === "Top Gun") {
    alert("One of my faves!");
    rightAnswersCount++;
  } else {
    alert("No, not quite");
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
      alert("Yes!");
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
    alert("No, that isn't one of my favorites");
  }

  alert("Yes or No questions")
  let dog = prompt("Do you have a dog?");
  if (dog === "yes") {
    alert("I love dogs!");
  } else if (dog === "no") {
    alert("I wish I had a dog");
  }

  alert("next question");
  let pet = prompt("Do you have a pet?");
  if (pet === "yes") {
    alert("I want a pet!");
  } else if (pet === "no") {
    alert("Neither do I:(");
  }

  alert("next question");
  let vacation = prompt("Do you like to travel?");
  if (vacation === "yes") {
    alert("I love to travel!");
  } else if (vacation === "no") {
    alert("I wish I could travel more");
  }

  alert("Two more yes or no questions");
  let car = prompt("Do you like cars?");
  if (car === "yes") {
    alert("I love cars!");
  } else if (car === "no") {
    alert("You're probably a slow driver");
  }

   alert("last question");
    let sports = prompt("Do you like sports?");
    if (sports === "yes") {
      alert("I love sports!");
    } else if (sports === "no") {
      alert("What do  you like?");
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
