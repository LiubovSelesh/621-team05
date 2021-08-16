const promptLiga = prompt("Enter number of goals in LaLiga");
const promptCopaDelRay = prompt("Enter number of goals in Copa del Ray");
const promptChampions = prompt("Enter number of goals in Champions");
const laligaGoals = Number(promptLiga);
const copaDelReyGoals = Number(promptCopaDelRay);
const championsLeagueGoals = Number(promptChampions);
const totalGoals = add(laligaGoals, copaDelReyGoals, championsLeagueGoals);
alert ("Total number of goals in all three leagues is " + totalGoals);

function add(laligaGoals, copaDelReyGoals, championsLeagueGoals) {
  const result = laligaGoals + copaDelReyGoals + championsLeagueGoals;
  return result;
}