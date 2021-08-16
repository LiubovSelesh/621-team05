const promptPosition = prompt("Enter your position: ");
const promptRoll = prompt("Enter your roll: ");
const position = Number(promptPosition);
const roll = Number(promptRoll);
const newPosition = move(position, roll);
alert ("Your new position is " + newPosition);


function move(position, roll) {
	const newPosition = position + roll*2;
  return newPosition;
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/train/javascript