// Function to generate the first 50 Fibonacci numbers
function fib() {
  const fibonacci = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}
console.log(fib()); // Generate and print the first 50 Fibonacci numbers
// Function to convert an array of numbers to an array of strings
function numsToStrings(numbers) {
  return numbers.map(number => `${number}`);
}
console.log(numsToStrings(fib())); // Convert and print the Fibonacci numbers as strings
// Function to count the number of even numbers in an array of numbers
function numEvenNums(numbers) {
  return numbers.filter(number => number % 2 === 0).length;
}
console.log(numEvenNums(fib())); // Count and print the number of even Fibonacci numbers
