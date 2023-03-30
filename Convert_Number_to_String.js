// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString()
}

// function numberToString(num) {
//   // could just do: return num + ''; But THAT would be cheating
//   var str = '',
//       mult = num < 0 ? -1 : 1;
//   num *= mult;

//   do {
//     str = String.fromCharCode(num % 10 + 48) + str;
//     num = ~~(num / 10);
//   } while (num > 0);
  
//   if(mult < 0) str = "-" + str;
//   return str;
// }