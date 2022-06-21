var generateBtn = document.querySelector("#generate");
var password = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!#$%&()*+,-./:;<=>?@][\^_`{|}~";
var canidates = "";
var passwordlength;
var letter = "";
var Charcters = [];
// Assignment Code


// TODO: add code to generate the password here
function generatePassword() {
  var passwordlength = prompt("How many characters would you like to use?"); {
    if (passwordlength < 8) {
      alert('Password length must be at least 10 characters');
      return;
    }
    if (passwordlength > 30 ) {
      alert('Password length must be less than 30 characters')
      return;
    }

    var lowercase = confirm(
      'Click OK for lowercase charcters.'
    );

    var uppercase = confirm(
      'Click OK for uppercase characters.'
    );

    var specialChar = confirm(
      'Click OK for special characters.'
    );
    var numbers = confirm(
      'Click OK for number characters.'
    );

    
    
    
    if (lowercase === true ) {
      lowercase = lowercase.slice(lowercase);
      selectedCharacters.push(generateRandom(lowercase));
      
    }
    
    if (uppercase === true) {
      uppercase = uppercase.slice(uppercase);
      selectedCharacters.push(generateRandom(uppercase)); 
      
    }
    if (specialChar === true) {
      specialChars = specialChars.slice(specialChars);
      selectedCharacters.push(generateRandom(specialChars));
      
    }
    if (numbers === true) {
      selectedCharacters.push(generateRandom(numbers));
    }
  }
    
    if(
      lowercase === false &&
      uppercase === false &&
      specialChar === false &&
      numbers === false 
     ) {
        alert("You must select at least one character type");
        return;
      }

      var password = {
        length: length,
        specialChar: specialChar,
        numbers: numbers,
        lowercase: lowercase,
        uppercase: uppercase,
      };
    
      return password;
    }
    // Write password to the #password input
function writePassword(lowercase, uppercase, numbers, specialChar, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  generateBtn.addEventListener("click", writePassword);
}
