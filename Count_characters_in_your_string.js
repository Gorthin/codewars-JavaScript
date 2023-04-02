// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    const result = {};
 
   // loop over input string
   for (const char of string) {
     // check if character has been seen before
     if (result.hasOwnProperty(char)) {
       // increase its count by 1
       result[char] += 1;
     } else {
       // add it to the object with a count of 1
       result[char] = 1;
     }
   }
 
   return result;
}


function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

