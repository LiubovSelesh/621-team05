
function add(laligaGoals, copaDelReyGoals, championsLeagueGoals) {
  const result = laligaGoals + copaDelReyGoals + championsLeagueGoals;
  return result;
}

// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript


const name = prompt("Enter your Name: ");
const owner = prompt("Enter Owner: ");
const greetings = greet(name, owner);
alert(greetings);

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  }
  if (name !== owner) {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript


const time = prompt("Enter сycling time: ");
const numberOfLitres = litres(time);
alert(numberOfLitres);

function litres(time) {
  const numberOfLitres = Math.floor(time * 0.5);
  return "The number of litres Nathan will drink is " + numberOfLitres;
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
