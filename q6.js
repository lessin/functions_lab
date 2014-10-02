/* 6. Write a function to return true or false if a number passed in is a
   prime number.
*/

var isprime = function (a) {
  for (var i = 2; i < a; i++) {
    if ( a % i == 0){
      return false;
    } else {
      return true;
    }
  };
}

console.log(isprime(6));