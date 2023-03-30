// Assignment Code
var generateBtn = document.querySelector("#generate");

//will have to make arrays of lower and upper letters, numbers, and symbols
var variables = {
lowercase:["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
 uppercase:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
 symbols:["!", "@", "#", "$", "%", "&", "*", "/", "{", "}", "<", ">", "+", "=", ",", ";"],
 numbers:["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
}
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

function generatePassword() {
  var password = "";
  var passwordLength = prompt("How many characters would you like in your password? (8-128)");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password can only be between 8 and 128 characters");
    return;
  }
  var lowercase = confirm("Would you like lowercase letters?");
  var uppercase = confirm("would you like uppercase letters?");
  var numbers = confirm("would you like numbers?");
  var symbols = confirm("would you like symbols?");
  if (!lowercase && !uppercase && !numbers && !symbols) {
    return;
  }
  for (var i = 0; i < passwordLength; i++) {
    var characterTypes = [];
    if (lowercase) {
      characterTypes.push(variables.lowercase);
    }
    if (uppercase) {
      characterTypes.push(variables.uppercase);
    }
    if (symbols) {
      characterTypes.push(variables.symbols);
    }
    if(numbers) {
      characterTypes.push(variables.numbers);
    }
    var characterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    var character = characterType[Math.floor(Math.random() * characterType.length)];
    password += character;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Password Generated! \n" + "Password: " + password + "\n");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
