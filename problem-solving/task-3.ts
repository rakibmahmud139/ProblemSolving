// problem-11
const students = [
  { name: "Alice", grades: [85, 92, 88] },
  { name: "Bob", grades: [75, 80, 72] },
  { name: "Charlie", grades: [95, 90, 93] },
  { name: "David", grades: [60, 70, 65] },
];

const calculateAverage = (grades) => {
  const total = grades.reduce((acc, grade) => acc + grade, 0);
  console.log("problem-11", total);
  return (total / grades.length).toFixed(2);
};
const averageGrades = (students) => {
  return students.map((student) => ({
    name: student.name,
    averageGrade: calculateAverage(student.grades),
  }));
};
console.log("problem-11", averageGrades(students));

// problem-12
const items = [
  { quantity: 2, price: 10 },
  { quantity: 5, price: 20 },
  { quantity: 3, price: 15 },
];

const calculateTotal = (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
};
console.log("problem-12", calculateTotal(items));

// problem-13
const findCommonElementsInArr = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [4, 5, 6, 7, 8];
const commonElements = findCommonElementsInArr(arrayA, arrayB);
console.log("problem-13", commonElements);

// problem-14
const customers = [
  { name: "Alice", purchases: 4, loyaltyPoints: 100 },
  { name: "Bob", purchases: 6, loyaltyPoints: 200 },
  { name: "Charlie", purchases: 8, loyaltyPoints: 300 },
  { name: "David", purchases: 2, loyaltyPoints: 150 },
  { name: "Eve", purchases: 5, loyaltyPoints: 250 },
];

const transformCustomers = (customers) => {
  return customers
    .filter((customer) => customer.purchases > 5)
    .map((customer) => ({
      ...customer,
      loyaltyPoints: customer.loyaltyPoints * 2,
    }));
};
console.log("problem-14", transformCustomers(customers));

// problem -15

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = args.toString();

    if (cache[key]) {
      console.log("Returning cached result for:", args);
      return cache[key];
    }

    console.log("Computing result for:", args);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(3, 4));
console.log(memoizedAdd(3, 4));
