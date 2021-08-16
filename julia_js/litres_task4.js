const time = prompt("Enter сycling time: ");
const numberOfLitres = litres(time);
alert (numberOfLitres);

function litres(time) {
  const numberOfLitres=Math.floor(time*0.5);
  return "The number of litres Nathan will drink is " + numberOfLitres;
}
