var FirstName=prompt("Type your first name: ");
var LastName=prompt("Type your last name: ");
var BirthYear=Number(prompt("Type your birth year: "));

document.getElementById("GFA").innerHTML="Hello "+FirstName+" "+LastName+"! How does it feel to be " + (2025 - BirthYear)+ " years old?";
