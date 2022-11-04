//Closures with Event listeners

function attachEventListener() {
  let count = 0;

  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count);
  });
}

attachEventListener();

//Scope with Event listeners

//Garbage collections & removeEvenListeners
