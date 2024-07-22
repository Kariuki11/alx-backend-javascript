## ES6 Basics

ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript language specification standard. It was released in June 2015 and introduced several significant changes and additions to JavaScript, making the language more powerful and easier to work with.

### Background

Before ES6, JavaScript had not seen significant updates for several years. The introduction of ES6 aimed to address various issues and limitations in the language, providing developers with more modern tools and features. The new features in ES6 make JavaScript more readable and maintainable, and they align the language more closely with modern programming paradigms.

### Key Features of ES6

1. **let and const**: Block-scoped variables
2. **Arrow Functions**: Shorter syntax for writing functions
3. **Template Literals**: Enhanced string literals for easier string interpolation
4. **Destructuring Assignment**: Extract values from arrays or objects into distinct variables
5. **Default Parameters**: Default values for function parameters
6. **Rest and Spread Operators**: Handling collections of elements more conveniently
7. **Classes**: Syntactic sugar over the existing prototype-based inheritance
8. **Modules**: Import and export of modules for better code organization
9. **Promises**: Improved asynchronous programming
10. **Map and Set**: New data structures
11. **Symbols**: New primitive data type

### Code Snippets

Here are some examples demonstrating these key features:

#### 1. `let` and `const`
```javascript
let mutableVar = "I can be changed";
const immutableVar = "I cannot be changed";

mutableVar = "I've been changed";
// immutableVar = "Trying to change"; // This will cause an error
```

#### 2. Arrow Functions
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

#### 3. Template Literals
```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
```

#### 4. Destructuring Assignment
```javascript
// Array Destructuring
const [first, second] = [10, 20];
console.log(first, second); // Output: 10 20

// Object Destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // Output: Alice 25
```

#### 5. Default Parameters
```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
```

#### 6. Rest and Spread Operators
```javascript
// Rest
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
```

#### 7. Classes
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person("John", 30);
john.greet(); // Output: Hello, my name is John and I am 30 years old.
```

#### 8. Modules
```javascript
// In a file named `math.js`
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// In another file
import { add, subtract } from './math.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

#### 9. Promises
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
};

fetchData().then(data => console.log(data)); // Output: Data fetched! (after 2 seconds)
```

#### 10. Map and Set
```javascript
// Map
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
console.log(map.get('key1')); // Output: value1

// Set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
console.log(set.has(3)); // Output: true
console.log(set.size); // Output: 6
```

#### 11. Symbols
```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // Output: false
```

### Conclusion

ES6 brought numerous enhancements and new features to JavaScript, greatly improving the language's usability, readability, and maintainability. The adoption of ES6 features has been widespread, and they are now fundamental parts of modern JavaScript development.
