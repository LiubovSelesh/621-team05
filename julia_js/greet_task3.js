const name = prompt("Enter your Name: ");
const owner = prompt("Enter Owner: ");
const greetings = greet(name, owner);
alert (greetings);

function greet(name, owner) {
  if (name===owner) {
    return "Hello boss";
  }
  if (name!==owner) {
    return "Hello guest";
  }
}

// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript