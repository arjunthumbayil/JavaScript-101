// Higher order functions
// Non functional non-modular way

const radius = [1, 2, 3, 4];

function calculateArea(input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(Math.PI * input[i] * input[i]);
  }
  return output;
}
console.log("Non-Functional " + calculateArea(radius));

//Functional way

function area(input) {
  return Math.PI * input * input;
}

function calculate(input, logic) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    output.push(logic(input[i]));
  }

  return output;
}

console.log("Functional " + calculate(radius, area));

// Array.prototype way

Array.prototype.calc = function calculate(logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log("Array Prototype: " + radius.calc(area));
