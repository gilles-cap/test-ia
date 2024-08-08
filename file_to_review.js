// example.js

// Syntax Error: Missing closing bracket
function multiply(a, b {
    return a * b;
  }
  
  // Logical Error: Incorrect use of Array.prototype.map()
  function doubleArray(arr) {
    return arr.map(function(num) {
      return num * 2;
    });
    // Extra line causes no return value
  }
  
  // Inefficient Code: Unnecessary nested loop
  function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
  
  // Bad Practice: Hardcoded values
  function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price + 5; // Arbitrary addition of 5
    }
    return total;
  }
  
  // Unused Parameter: 'url' is never used
  function fetchData(url, callback) {
    // Simulate an asynchronous operation
    setTimeout(function() {
      const data = { name: "John Doe", age: 30 };
      callback(data);
    }, 1000);
  }
  
  // Example usage
  console.log(multiply(5, 2)); // Should print 10, but will cause a syntax error
  console.log(doubleArray([1, 2, 3, 4, 5])); // Should print [2, 4, 6, 8, 10]
  console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 6])); // Should print [4, 6]
  console.log(calculateTotal([{ price: 10 }, { price: 15 }, { price: 20 }])); // Adds 5 to each item's price
  fetchData("https://api.example.com/data", function(data) {
    console.log(data); // Should print { name: "John Doe", age: 30 }
  });
  