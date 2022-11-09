//Polyfill for Map


Array.prototype.myMap = function (callback) {
  var output = [];
  for (var i = 1; i < this.length; i++) {
    output.push(callback(this[i], i, this));
  }

  return output;
};

var arr = [1, 2, 3, 4, 5];

var output = arr.myMap((x) => x * 2);

console.log(output);
