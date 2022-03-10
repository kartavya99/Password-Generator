
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
 
  // ask user for their choice from the four options using boolean value

  // Function Name : generatedPassword because in starter code there is already writePassword function with a variable password which store generated password from generatedPassword function and therefore we have to write all the code into generatePassword function
  
function generatePassword(){
  var isLowercase = window.confirm("Do you want lowercase?");
  // console.log(isLowercase);
  var isUppercase = window.confirm("Do you want uppercase?");
  // console.log(isUppercase);
  var isNumber = window.confirm("Do you want number ?");
  // console.log(isNumber);
  var isSymbol = window.confirm("Do you want symbol?");
  // console.log(isSymbol);


  // if user denies all the above options then below alert will brief user to choose at least one character type
  if (!isLowercase && !isUppercase && !isNumber && isSymbol) {
    window.alert("please choose at least one character type");
    return;
  }
// below prompt will request user to choose password length 
  var passwordLength = window.prompt("please select the password length between 8 and 128 character");
  if(passwordLength <8 || passwordLength >128 ){
    // if user try to create password outside the length between 8 and 128 character then user will be get alert 
    window.alert("password length must be between 8 and 128 character");
    return;
  }

  // Empty array to store the data of lowercase, uppercase, numbers and symbol arrays
var passwordOption = []

// using concat method to merge below four arrays to store data into passwordOption array
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
// console.log(passwordOption);

//empty string to store data of generated password
var randomPassword = ""


//for loop to creat the password with random character from passwordOption array.
for(var i = 0; i < passwordLength; i ++) {
  var item = passwordOption[Math.floor(Math.random()*passwordOption.length)]
  randomPassword += item
}

//console.log(randomPassword);
// hand off the new password created and stored into randomPassword string to generatePassword function
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
