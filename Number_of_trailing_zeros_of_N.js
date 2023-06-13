// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros


function zeros (n) {
    let divider = 1
    let sum = 0 
    
    while (divider <= n){
        sum = Math.floor(sum + n/(divider *= 5))
    }
    return sum
}


function zeros (n) {
    var zs = 0;
    while(n>0){
      n=Math.floor(n/5);
      zs+=n
    }
    return zs;
}


