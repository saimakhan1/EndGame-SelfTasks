1. What are primitive and non-primitive data types in JavaScript?
   Primitive Data Types in JavaScript
   Answer: Primitive data types store single, simple values.
   They are immutable, meaning their values cannot be changed directly.
   JavaScript has 7 primitive data types: Number, String, Boolean, Undefined, Null, BigInt, Symbol
1. Number
   Used for integers and floating-point numbers.
   let age = 25;
   let price = 99.99;
1. String
   Used for text. Strings are written inside quotes.
   let name = "Saima";
   let message = 'Hello JavaScript';

1. Boolean
   Represents logical values: true or false.
   let isLoggedIn = true;
1. Undefined
   A variable that is declared but not assigned a value.
   let x;
   console.log(x); // undefined
1. Null
   Represents an intentional absence of value.
   let data = null;
1. BigInt
   Used for very large integers beyond Number limits.
   let bigNumber = 12345678901234567890n;
1. Symbol
   Used to create unique identifiers.
   let id = Symbol("userId");
   Key Features of Primitive Types
   • Stored by value
   • Immutable
   • Fast and memory-efficient

---

Non-Primitive (Reference) Data Types
Non-primitive data types can store multiple values or complex structures.
They are mutable and stored by reference.

1. Object
   Used to store key-value pairs.
   let user = {
   name: "Saima",
   age: 24
   };
2. Array
   Used to store multiple values in a single variable.
   let colors = ["red", "green", "blue"];
3. Function
   Functions are also objects in JavaScript.
   function greet() {
   console.log("Hello!");
   }
   One Important Example (Value vs Reference)
   let a = 10;
   let b = a;
   b = 20;
   console.log(a); // 10

let obj1 = { name: "Saima" };
let obj2 = obj1;
obj2.name = "Khan";
console.log(obj1.name); // Khan

---

2. Explain the difference between dot notation and bracket notation in objects.
   Dot Notation
   Dot notation is the most common and readable way to access or modify object properties.

Syntax
object.property
Example:
let user = {
name: "Saima",
age: 24
};

console.log(user.name); // Saima
user.age = 25;

When to Use Dot Notation
• Property name is known in advance
• Property name is a valid identifier
• Property name has no spaces or special characters

Limitations
Dot notation cannot be used if:
• The property name has spaces
• The property name starts with a number
• The property name is stored in a variable

Bracket Notation
Bracket notation is more flexible and powerful.
Syntax
object["property"]
object[variable]
Example:
let user = {
"full name": "Saima Khan",
age: 24
};

console.log(user["full name"]); // Saima Khan

Using Variables:
let key = "age";
console.log(user[key]); // 24
Key Difference Example:
let person = {
name: "Saima"
};

let prop = "name";

console.log(person.prop); // undefined
console.log(person[prop]); // Saima
Reason behind this output:
• person.prop looks for a property literally named "prop"
• person[prop] evaluates the variable first

What is the use of the forEach() method?
The forEach() method is used to loop through each element of an array and perform an operation on every item. It helps you write clean, readable, and concise code when working with arrays.

---

What forEach() Does
• Executes a callback function once for each array element
• Iterates in order (from index 0 to last)
• Does not return a new array
Example:
let numbers = [1, 2, 3, 4];

numbers.forEach(num => {
console.log(num);
});

Example 2:
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
console.log(index + ": " + fruit);
});

Common Use Cases
• Display array items
• Perform calculations (sum, average)
• Update existing array values
• Execute side effects (logging, DOM manipulation)

forEach() vs map()
// forEach
arr.forEach(x => x \* 2); // no return

// map
let newArr = arr.map(x => x \* 2); // returns new array
\*\*
When to Use forEach()
forEach() is used when:
• want to iterate and perform an action
• don’t need a returned array
Avoid it when:
• need to transform data → use map()
• need to filter items → use filter()

What is JSON and where is it used?
JSON stands for JavaScript Object Notation.
It is a lightweight data-interchange format used to store and exchange data between systems, especially between a client (browser/app) and a server.

---

What is JSON?
• Text-based format
• Easy for humans to read and write
• Easy for machines to parse and generate
• Language-independent (used beyond JavaScript)
Example of JSON
{
"name": "Saima Khan",
"age": 24,
"isStudent": false,
"skills": ["JavaScript", "React", "Node.js"]
}

5. Difference between push() and pop()
   The push() method is used to add one or more elements to the end of an array and returns the new length of the array.
   The pop() method is used to remove the last element from an array and returns the removed element.
   Example:
   let arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [1, 2, 3, 4]

arr.pop();
console.log(arr); // [1, 2, 3]

---

6. Difference between == and ===
   The == operator compares only the values of two variables and performs type conversion if necessary.
   The === operator compares both value and data type and does not perform type conversion.
   Example:
   5 == "5"; // true
   5 === "5"; // false

---

7. Callback Function
   A callback function is a function that is passed as an argument to another function and is executed later.
   Example:
   function greet(name, callback) {
   console.log("Hello " + name);
   callback();
   }

function sayBye() {
console.log("Goodbye!");
}

greet("Saima", sayBye);

---

8. Difference between null and undefined
   null represents an intentional absence of value and is explicitly assigned by the programmer.
   undefined indicates that a variable has been declared but not assigned any value.
   Example:
   let a = null;
   let b;

console.log(a); // null
console.log(b); // undefined

---

9. Purpose of the map() Method
   The map() method is used to create a new array by applying a function to each element of an existing array.
   It does not modify the original array.
   Example:
   let numbers = [1, 2, 3];

let doubled = numbers.map(num => num \* 2);

console.log(doubled); // [2, 4, 6] 10. Write a function that counts how many times a specific value appears in an array
Explanation:
This function loops through the array and increases a counter whenever the target value is found.
Code:
function countOccurrences(arr, value) {
let count = 0;

for (let i = 0; i < arr.length; i++) {
if (arr[i] === value) {
count++;
}
}

return count;
}

// Example
const numbers = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(numbers, 2)); // Output: 3 11. Write a program to reverse an array without using reverse() method
Explanation:
This program swaps elements from the start and end of the array until they meet in the middle.
Code Example:
function reverseArray(arr) {
let start = 0;
let end = arr.length - 1;

while (start < end) {
let temp = arr[start];
arr[start] = arr[end];
arr[end] = temp;

    start++;
    end--;

}

return arr;
}

// Example
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
