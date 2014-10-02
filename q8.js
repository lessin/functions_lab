/*8. Write a function called letterCount that takes a string and finds
   out how many times a character occurs. For example, if the input
   was "apple", the output should inform you that "a" occurred once,
   "p" occurred twice, and "l" and "e" each occurred once. You have
   some flexibility in how you want to output this data.*/


  var letterCount = function (str, chr){

    stringArray = str.split("");
    var counter = 0;

    for (i = 0; i <= stringArray.length; i++){
      if( stringArray[i] == chr){
        counter ++
      }
    }

    return counter;
}

string = "who goes there says the good person";
character = "e";

console.log(letterCount(string,character));
