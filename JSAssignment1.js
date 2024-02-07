//!Write a JavaScript program to print "Hello, World!" to the console.
console.log("Hello World!");
//!2)Write a JavaScript program to find the sum of two numbers entered by the user.

let num4 = parseFloat(prompt("Enter the first number:"));

let num5 = parseFloat(prompt("Enter the second number:"));

let sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

//!4. Write a JavaScript program to find the largest number among three given numbers.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log(
  "The largest number among " +
    num1 +
    ", " +
    num2 +
    ", and " +
    num3 +
    " is: " +
    largest
);

//!5. Write a JavaScript program to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

let inputString = prompt("Enter a string:");

let reversedString = reverseString(inputString);

console.log("Reversed string: " + reversedString);

//!6. Write a JavaScript program to check if a given string is a palindrome.
function isPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

let inputString1 = prompt("Enter a string:");

let palindromeCheck = isPalindrome(inputString1);

if (palindromeCheck) {
  console.log("The string '" + inputString1 + "' is a palindrome.");
} else {
  console.log("The string '" + inputString1 + "' is not a palindrome.");
}

//!7. Write a JavaScript program to calculate the factorial of a number.
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let inputNumber = parseInt(prompt("Enter a number:"));

if (isNaN(inputNumber) || inputNumber < 0) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  let result = factorial(inputNumber);
  console.log("The factorial of " + inputNumber + " is: " + result);
}
//!8. Write a JavaScript program to generate Fibonacci series up to a given number.
function generateFibonacci(limit) {
  let fibonacciSeries = [];

  fibonacciSeries.push(0);
  fibonacciSeries.push(1);

  for (
    let i = 2;
    fibonacciSeries[i - 1] + fibonacciSeries[i - 2] <= limit;
    i++
  ) {
    fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
  }

  return fibonacciSeries;
}

let limit = parseInt(prompt("Enter the limit for the Fibonacci series:"));

if (isNaN(limit) || limit < 0) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  let fibonacciSeries = generateFibonacci(limit);

  console.log(
    "Fibonacci series up to " + limit + ": " + fibonacciSeries.join(", ")
  );
}
//!9. Write a JavaScript program to find the prime numbers within a specified range.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findPrimesInRange(start, end) {
  let primeNumbers = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

let start = parseInt(prompt("Enter the start of the range:"));
let end = parseInt(prompt("Enter the end of the range:"));

if (isNaN(start) || isNaN(end) || start >= end) {
  console.log("Invalid input. Please enter valid start and end values.");
} else {
  let primeNumbersInRange = findPrimesInRange(start, end);

  if (primeNumbersInRange.length === 0) {
    console.log("No prime numbers found within the specified range.");
  } else {
    console.log(
      "Prime numbers within the range " +
        start +
        " to " +
        end +
        ": " +
        primeNumbersInRange.join(", ")
    );
  }
}
//!10. Write a JavaScript program to check if a given year is a leap year.
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

let year = parseInt(prompt("Enter a year:"));

if (isNaN(year) || year <= 0) {
  console.log("Invalid input. Please enter a valid positive integer.");
} else {
  let isLeap = isLeapYear(year);
  if (isLeap) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}
