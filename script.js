var generateBtn = document.querySelector("#generate");
var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&()*+,-./:;<=>?@][\^_`{|}~";
var canidates = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@][\^_`{|}~";
var passLength = 0;
var includeUpper = false;
var includeLower = false;
var includeNumber = false;
var includeSpecial = false;
var letter = "";
// Assignment Code


// TODO: add code to generate the password here
function generatePassword() {
  var passLength = prompt("Enter password length.");
  // passwordText = passLength.
  if (passLength > 150 || passLength < 5) {
    alert("Password length must be 5 to 150 characters long.");
} else if (passLength <= 150 || passLength >= 5) 
  return password; 
}



function lowercase() {
  var lowercase = prompt("Would you like to use lowercase letters?");
  // function makeid(length) {
    // var result           = '';
    // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 lowercase));
   }
   return result;

}

console.log(generatePassword);

// Write password to the #password input
function writePassword(lowercase, uppercase, numbers, specialChar, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
  

  passwordText.value = password;

}
generatePassword();

// const generatePassword = (length, characters) => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return password;
// };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", 
// generateBtn.addEventListener("click", )

