// app.js

// Deliberate Syntax Errors
function addNumbers(a, b {
    return a + b;
  }
  
  // Deliberate Logical Errors
  function isEven(num) {
    if (num % 2 = 0) { // Should be '===' instead of '='
      return true;
    } else {
      return false;
    }
  }
  
  // Bad Practices: Global variables
  total = 0;
  
  function sumArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      total += arr[i]; // Should declare 'total' with 'let' or 'const'
    }
    return total;
  }
  
  // Inefficient code
  function inefficientFunction() {
    var arr = [];
    for (var i = 0; i < 1000000; i++) {
      arr.push(i);
    }
    return arr;
  }
  
  // Unused variables
  function unusedVars() {
    var x = 10;
    var y = 20;
    return x; // 'y' is declared but never used
  }
  
  // Example usage
  console.log(addNumbers(5, 10));
  console.log(isEven(4));
  console.log(sumArray([1, 2, 3, 4, 5]));
  console.log(inefficientFunction());
  console.log(unusedVars());
  