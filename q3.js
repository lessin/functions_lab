/*3. If your previous function did not use the `return` keyword, modify
   it so that it does. It should return the message to be logged
   instead of logging it directly. Store the result in a variable and
   log that instead.

   Bonus: Appreciate the difference between logging from within the
   function and returning a value to be logged outside the function.*/



var helloworld = function (name){
  return "hello "+ name;
}

console.log(helloworld("Sam"));


