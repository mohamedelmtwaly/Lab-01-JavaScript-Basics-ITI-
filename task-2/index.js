//TASK-1: Ask the user to enter a message then display it using html heading tags form h1 : h6 using loops  .Dont  write the header element explicity in your script!

var mess = prompt("enter your message ");
for (let i = 1; i <= 6 ; i++) {
document.writeln("<h" + i + ">"+ mess +"</h"+i+">")
  
}



//TASK-2: 
var num1 = Number(prompt("enter nummber1"));

var num2 = Number(prompt("enter nummber1"));

var num3 = Number(prompt("enter nummber1"));

var colorFav= prompt("enter your favourite color ")

console.log(num1 , num2, num3 , colorFav);