// Assignment Code
var generateBtn = document.querySelector("#generate");

//will have to make arrays of lower and upper letters, numbers, and symbols
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "{", "}", "<", ">", "+", "=", ";"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

//make generatePassword function
function generatePassword() {
  
  return "P"
}
//prompt for password length is a number
prompt 
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
