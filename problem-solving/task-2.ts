// Task-06: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const sumOfEvenNumbers = (numbers: number[]): number => {
  return numbers.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc));
};

// Example:
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(arrayOfNumbers));
// Output: 12

// Task-07: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

const leapYearChecker = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

// Example:
console.log(leapYearChecker(2024));
// Output: true
console.log(leapYearChecker(2023));
// Output: false

// Task-08: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

const countVowels = (str: string) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
};

// Example:
console.log(countVowels("Happy New Year"));
// Output: 5

// Task-09: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const uniqueNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num, index) => numbers.indexOf(num) === index);
};

// Example:
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueNumbers(numbersWithDuplicates));
// Output: [1, 2, 3, 4, 5]

// Task-10: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const findMaxValue = (numbers: number[]): number => {
  return Math.max(...numbers);
};

// Example usage:
const arrayToFindMax = [10, 20, 30, 40, 5];
console.log(findMaxValue(arrayToFindMax));
// Output: 40
