
  //  presented with a series of prompts for password criteria and alert for user to choose at least one character type.
  //  length of the password 8 to 128 characters - creat length limit between 8 to 128 character and also alert for the user to select the correct length.
  //  include lowercase, uppercase, numeric, and/or special characters - create arrays of all
    //  input should validate one character type 
  // password is either displayed in an alert of written to the page


  // below is the arrays for the character type
  //------------------------------------------------------------------------------
  var lowercase = ["a" , "b" , "c", "d", "e", "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r", "s" , "t" , "u" , "v" , "y" , "z" ];

  var uppercase = [ "A" , "B" , "C" , "D" , "E", "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M", "N" , 'O' , "P" , "Q" , "R" , "S" , "T", "U", "V", "Y", "Z"];
  
  var numbers = [ "0" , "1" , "2" , "3" , "4" ,'5' , "6" , "7" , "8" , "9"];
  
  var symbol = [ '!', "#" ,  "$" ,  "%" ,  "&",  "*" , "+" , "," , "-" , "/" ,"<" , ">" , "?" , "^" , "`" , "{" , "|" , "}" , "~" ];
  
function generatePassword(){
  var isLowercase = window.confirm("Do you want lowercase?");
  var isUppercase = window.confirm("Do you want uppercase?");
  var isNumber = window.confirm("Do you want number ?");
  var isSymbol = window.confirm("Do you want symbol?");

  if (!isLowercase && !isUppercase && !isNumber && isSymbol) {
    window.alert("please choose at least one character type");
    return;
  }

  var passwordLength = window.prompt("please select the password length between 8 and 128 character");
  if(passwordLength <8 || passwordLength >128 ){
    return;
  }

var passwordOption = []

if(isLowercase){
  passwordOption = passwordOption.concat(lowercase);
}
if(isUppercase){
  passwordOption = passwordOption.concat(uppercase);
}
if(isNumber){
  passwordOption = passwordOption.concat(numbers);
}
if(isSymbol){
  passwordOption = passwordOption.concat(symbol);
}

var randomPassword = ""

for(var i = 0; i < passwordLength; i ++) {
  var item = passwordOption[Math.floor(Math.random()*passwordOption.length)]
  randomPassword += item
}

return randomPassword;  


}
 




    

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
