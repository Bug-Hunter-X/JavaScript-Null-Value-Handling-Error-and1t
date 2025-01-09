function foo(a, b) {
  a = a === null ? 0 : a; // Use 0 as default for null
  b = b === null ? 0 : b; // Use 0 as default for null
  // Perform operations now that null values are handled 
  return a + b;
}