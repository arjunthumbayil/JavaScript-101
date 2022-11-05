//Issues with setTimeout()

console.log("start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("end");

//Simulating code execution to block the main thread

let startTime = new Date().getTime();
let endTime = startTime;
while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("while expires");
