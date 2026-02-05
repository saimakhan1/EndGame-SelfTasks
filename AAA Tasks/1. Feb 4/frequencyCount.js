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
console.log(countOccurrences(numbers, 2)); // Output: 3
