// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    let str = text.toLowerCase();
    let a = "";
  
    for ( i = 0; i < str.length; i++) {
  
        if (str.charCodeAt(i) - 96 > 0 && str.charCodeAt(i) - 96 <= 26) {
          a+= str.charCodeAt(i) - 96 + ' ';
        }
      }
      return a.trim();
}


// function alphabetPosition(text) {
//     text = text.toLowerCase().replace(' ','')
//     let letters = 'abcdefghijklmnopqrstuvwxyz', msg = "";
//     for(char in text){
//       if(letters.indexOf(text[char]) !== -1){   
//          msg += ((letters.indexOf(text[char])+1) + " ")
//       }
//     }
//     return msg.slice(0, -1);
// }