// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" 
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, 
// False if not. Ignore numbers and punctuation.


function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}


function isPangram(string){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                      't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = [];
    string.toLowerCase().replace(/\w/g, (str) => {
      str.split('').reduce((acc, cur) => {
        return !result.includes(cur)
           && alphabet.includes(cur)
           && result.push(cur);
        }, '');
     });
    return alphabet.join('') === result.sort().join('');
}


function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}


function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}


