//Polyfill for Reduce

//Initial value can be provided
//reduce the value to a particular element at each step, with result from previous step
//logic of for loop
//Always get a previous value on which the next computation is to be performed (accumulator).

Array.prototype.myReduce = function (callback, initialValue = null) {
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

var arr = [1, 2, 3, 4, 5];

var output = arr.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);

console.log(output);
