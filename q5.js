/*5. Write a function that prints out how many times it has been
   called.

   Hint: Can you do this using only local variables? Think about
   what we talked about regarding variable scope. Can you rely on the
   help of a global variable?
*/


var count = 0;

var timescalled = function(){
  count++;
};


timescalled();
timescalled();
timescalled();


console.log(count);