// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


function solution(str){
  return str.split("").reverse().join("");
}

// function solution(str){
//   var revStr = '';
//   for (var i = str.length - 1; i >= 0; i--)
//     revStr += str[i];
//   return revStr;
// }