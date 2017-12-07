/*
  A JavaScript module which performs a binary search on an array of numbers ordered low to high.  If the specified value is found its index in the input array is returned.  If the specified value is not found -1 is returned.
*/
module.exports = exports = function(input, value) {
  var bottom = 0, top = input.length - 1, index = null;
//  complete the function
  input.sort();
  var sorted = input;
  var found = 0;
  while(found === 0) {
    var middleIndex = Math.floor(sorted.length/2);
    if (value === sorted[middleIndex]) {
      found = middleIndex;
    }
    if (value > sorted[middleIndex]) {
      sorted = sorted.splice(middleIndex);
    } else {
      sorted = sorted.splice(0, middleIndex);
    }
  }
  return found ? found : -1;
};
