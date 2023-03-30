// Complete the method/function so that it converts dash/underscore 
// delimited words into camel casing. The first word within the output 
// should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case). 
// The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
}


function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
      if(el == '-' || el == '_'){
        el = str[i+1].toUpperCase();
        str.splice(i+1, 1);
      }
      return el;
    }).join('');
}


function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}


function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}