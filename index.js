function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue <= 2000) {
    return "That will be twenty bucks.";
  } else if (someValue <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}
// console.log(scuberGreetingForFeet(2000));

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
// console.log(ternaryCheckCity("Paris"));

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
      default:
        return "Bye.";
  }
}
// console.log(switchOnCharmFromTip("thanks for everything"));