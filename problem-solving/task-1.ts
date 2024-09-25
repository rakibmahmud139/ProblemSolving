/* 1. Task: Array Filtering and Mapping
     Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
    */

type Person = {
  name: string;
  age: number;
  gender: "Male" | "Female";
};

const people: Person[] = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 28, gender: "Female" },
  { name: "David", age: 27, gender: "Male" },
];

const filterPeople = (people: Person[]) => {
  return people.filter((person: Person) => person.gender !== "Female");
};

const requiredPeople = filterPeople(people);

/* 2. Task: Object Manipulation
    Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
    */

type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const getTitleFromBooks = (books: Book[]) => {
  return books.map((book: Book) => book.title);
};

const requiredTitles = getTitleFromBooks(books);

/* 3. Task: Function Composition
    Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the 
    result, and then adds 5.
    */

const square = (num: number) => num * num;
const double = (num: number) => num * 2;
const addFive = (num: number) => num + 5;

const composingFunction = (num: number) => addFive(double(square(num)));

const requiredComposedNumber = composingFunction(5);

/* 4. Task: Sorting Objects
    Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
    */

type Car = {
  make: string;
  model: string;
  year: number;
};

const cars: Car[] = [
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Honda", model: "Accord", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2019 },
];

const sortByYear = (cars: Car[]) => cars.sort((a, b) => a.year - b.year);

const sortedCars = sortByYear(cars);

/*5. Task: Find and Modify
    Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
    */

const findPersonAndModify = (people: Person[], name: string, age: number) => {
  return people.map((person) => {
    if (person.name === name) {
      person.age = age;
    }
    return person;
  });
};

const updatedPeople = findPersonAndModify(people, "David", 18);
