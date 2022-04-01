var generateBtn = document.querySelector("#generate");
var passsword = "";
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = document.querySelector("#uppercase");
var numbers = document.querySelector("#numbers");
var specialChar = document.querySelector("#special");
var canidates = "";
var passLength = 0;
var includeUpper = false;
var includeLower = false;
var includeNumber = false;
var includeSpecial = false;
var letter = "";
// Assignment Code


// TODO: add code to generate the password here
function generatePassword() {
  var password = "password";
  var passLength = prompt("Enter password length.");
  if (passLength > 150 || passLength < 5);
  alert("Password length must be 5 to 150 characters long.");
  
} else if 
  
  return password;
}
console.log(generatePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", )
// generateBtn.addEventListener("click", )

