## Function Explanation

The `mean` function calculates the average (mean) of an array of numbers.

### How it works

- **Parameter:**  
  `array` (Array): An array containing numbers.

- **Returns:**  
  The mean (average) of the numbers in the array. If the array is empty, it
  returns `NaN`.

- **How it works:**
  1. Checks if the array is empty. If so, returns `NaN`.
  2. Uses `reduce` to sum all the numbers in the array.
  3. Divides the sum by the length of the array to get the mean.

### Implementation

```js
/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  if (array.length === 0) return NaN;
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}
```

### Example

```javascript
import mean from "./1.js";

console.log(mean([4, 2, 8, 6])); // 5
console.log(mean([1, 2, 3, 4])); // 2.5
console.log(mean([1, 2, 2])); // 1.6666666666666667
console.log(mean([])); // NaN
```
