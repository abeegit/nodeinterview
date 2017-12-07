/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
  //  complete the function
  for (var i = 0; i < input.length; i++) {
    for (var j = 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        var temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
      console.log(input);
    }
  }

  return input;
};
