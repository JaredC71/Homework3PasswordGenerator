// Assignment Code
var generateBtn = document.querySelector("#generate"); //generate button
let lowerCaseDataSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //lowercase characters
let UpperCaseDataSet = []; //set uppercase data to an empty array, loop through lowercase, capitialize each index, and push into Uppercasedata
for (let i = 0; i < lowerCaseDataSet.length; i++) {
  UpperCaseDataSet.push(lowerCaseDataSet[i].toUpperCase());
}
let specialCharacterDataSet = ['#', '&', '%', '$', '*', '+', '=', '!', '-', '_', '?', '/']; //special characters
let numberCharacterdataSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; //numbers

let password = []; //set password to an empty array, will push generated password from character set one user input is given
let characterSet = []; // set character set to empty array, will recieve indexs from lower, upper, and / or special character data sets based on user input, then will be pushed into password
let generatePassword = () => {
  
  if (password.length >= 1) { //if a password already exist, clear it for the new one to take its place
    password = [];
    characterSet = [];
  }
  
  
  let lengthInput = parseInt(prompt('how many characters?')); //how long the password will be
  
  let lowerCaseInput = prompt('Do you want your password to include lowercase characters? type yes or no.'); //does the user want lower case
  lowerCaseInput = lowerCaseInput.toLowerCase();
  
  let upperCaseInput = prompt('Do you want your password to include uppercase characters? type yes or no.'); //does the user want upper case
  upperCaseInput = upperCaseInput.toLowerCase();
  let specialCharacterInput = prompt('Do you want your password to include special characters? type yes or no.'); //does the user want special characters
  specialCharacterInput = specialCharacterInput.toLowerCase();
  // if (lowerCaseInput !== 'yes' || lowerCaseInput !== 'no' || upperCaseInput !== 'yes' || upperCaseInput !== 'no' || specialCharacterInput !== 'yes' || specialCharacterInput !== 'no') {
  //   alert('only submit yes or no');
  // }
  if (lowerCaseInput === 'yes' && upperCaseInput === 'yes' && specialCharacterInput === 'yes') { //if the user says yes to everything, all data sets will be pushed to characterset
    for (let i = 0; i < lowerCaseDataSet.length; i++) {
      characterSet.push(lowerCaseDataSet[i]);
    }
    for (let i = 0; i < UpperCaseDataSet.length; i++) {
      characterSet.push(UpperCaseDataSet[i]);
    }
    for (let i = 0; i < specialCharacterDataSet.length; i++) {
      characterSet.push(specialCharacterDataSet[i]);
    }
    
  }
  else if (lowerCaseInput === 'yes' && upperCaseInput === 'yes' && specialCharacterInput === 'no') { //if the user says yes to everything except special characters, all data sets will be pushed to characterset except specialcharacters
    for (let i = 0; i < lowerCaseDataSet.length; i++) {
      characterSet.push(lowerCaseDataSet[i]);
    }
    for (let i = 0; i < UpperCaseDataSet.length; i++) {
      characterSet.push(UpperCaseDataSet[i]);
    }
  }
  else if (lowerCaseInput === 'yes' && upperCaseInput === 'no' && specialCharacterInput === 'yes') {//if the user says yes to everything except uppercase, all data sets will be pushed to characterset except uppercase
    for (let i = 0; i < lowerCaseDataSet.length; i++) {
      characterSet.push(lowerCaseDataSet[i]);
    }
    for (let i = 0; i < specialCharacterDataSet.length; i++) {
      characterSet.push(specialCharacterDataSet[i]);
    }
    
  }
  else if (lowerCaseInput === 'no' && upperCaseInput === 'yes' && specialCharacterInput === 'yes') {
    for (let i = 0; i < UpperCaseDataSet.length; i++) {
      characterSet.push(UpperCaseDataSet[i]);
    }
    for (let i = 0; i < specialCharacterDataSet.length; i++) {
      characterSet.push(specialCharacterDataSet[i]);
    }
    
  }
  else if (lowerCaseInput === 'yes' && upperCaseInput === 'no' && specialCharacterInput === 'no') {
    for (let i = 0; i < lowerCaseDataSet.length; i++) {
      characterSet.push(lowerCaseDataSet[i]);
    }
    
  }
  else if (lowerCaseInput === 'no' && upperCaseInput === 'yes' && specialCharacterInput === 'no') {
    for (let i = 0; i < UpperCaseDataSet.length; i++) {
      characterSet.push(UpperCaseDataSet[i]);
    }
    
  }
  else if (lowerCaseInput === 'no' && upperCaseInput === 'no' && specialCharacterInput === 'yes') {
    for (let i = 0; i < specialCharacterDataSet.length; i++) {
      characterSet.push(specialCharacterDataSet[i]);
    }
    
  } else if (lowerCaseInput === 'no' && upperCaseInput === 'no' && specialCharacterInput === 'no'){ //if the user does not select yes to atleast one critiera
    alert('please select atleast one criteria');
    writePassword(); //start from beginning
    
  } else {
    alert('error!! Make sure you only submit yes or no. Also check if you submited a number for your password length!');
    writePassword();  //start from beginning
  }
  
  
  for (let i = 0; i < lengthInput; i++) {//set less than to the character length of password
    let randomIndex = Math.floor(Math.random() * (characterSet.length - 1) + 1); //generate a random number between the first index of character set to the last index of character set
    let character = characterSet[randomIndex]; //grab the index of characterset using the random generated number
    
    password.push(character); //push that character into our password array
    
    
  }
  
}

// Write password to the #password input
function writePassword() {
  generatePassword(); //call our function
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join(''); //pass the password characters to our element and remove the commas using join
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //assign write password to our generate button when clicked





