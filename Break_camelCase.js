// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    let msg = ''
    for (str of string) {
      console.log(str)
      if (str === str.toUpperCase()) {
        msg += " "+str
      } else {
        msg += str
      }
    }
  return msg
}


function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
}


function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }