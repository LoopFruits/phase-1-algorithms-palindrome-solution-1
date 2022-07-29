function reverse(word){
  //create and array from the input string
  const wordArray = word.split("")
  //reverse the array
  const reversedWordArray = wordArray.reverse()
  //create a string from the reversed array
  const reversedWord = reversedWordArray.join("")
  //return the reversed string
  return reversedWord
  //method chainning, can be replaces with what we have above
  //return word.split("").reverse().join("");
}


function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord = reverse(word);
  //clean version
  // return word === reversedWord;
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
}
/* 
  Add your pseudocode here

  if the word is the same as the reversed word it should return true

  reverse the input string 

    if the input is the same as the reversed input 
      return true
    else 
      return false
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tire"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));


}

module.exports = isPalindrome;
