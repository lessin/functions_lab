/*4.  Write a function add() that takes two numbers as arguments and
    returns the sum.

    * Write a function sub() take takes two numbers as arguments and
      returns the difference.

    * Write a function combine() that takes three parameters. The
      first two are numbers and the last is a boolean. If the boolean
      is true, return the sum of the first two arguments, otherwise,
      return the difference. Hint: use add() and sub() from within
      combine().
*/


var addsomeshit = function (a,b) {
  return a+b;
}


var combine = function (a,b,c) {
  if (c = true){
    return a+b;
  }
  else {
    return a-b;
  }
}


console.log(addsomeshit(1,2));
console.log(combine(5,1,false));



