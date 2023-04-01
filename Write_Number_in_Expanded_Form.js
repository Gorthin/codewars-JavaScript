// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    var mul = 10;
    var result = [];
    while (num > 1){
      var remainder = num % mul;
      if(remainder >0){
        result.unshift(remainder);
      }
      num -= remainder;
      mul = mul * 10;
    }
    return result.join(" + ");
  }


const expandedForm = n => n.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");