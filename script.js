// Assignment Code
var generateBtn = document.querySelector("#generate");

//will have to make arrays of lower and upper letters, numbers, and symbols
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbols = ["!@#$%&*/{}<>+=,;"]
var numbers = ["1234567890"]

//make generatePassword function
//prompt for password length is a number
//if statement if number is above 8 && below 128
//confirm for lowercase, uppercase, numeric, and special characters
//store their response in a variable
//if statement for each confirm and if it is a yes or true I would push or add random characters to a string/array
//for loop while i is less than their answer for num length prompt
//in this for loop we would randomly pull characters from the big array
//pull random characters from the arrayusing math.random
//have a variable declared above the for loop 
//that var += theRandomChar
//return the password var



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like in your password? (0-128)");
  if ()
  
  return;
}