//Polyfill for Filter

//Always returns a new array
//Logic of for loop
//Always checks for condition

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  for (var i = 1; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var arr = [1, 2, 3, 4, 5];

var output = arr.myFilter((x) => x > 2);

console.log(output);
