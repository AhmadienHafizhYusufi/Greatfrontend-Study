## Function Explanation

The `makeCounter` function creates a counter that remembers its state between
calls.

### How it works

- **Parameter:**  
  `initialValue` (optional): The starting value for the counter. If not
  provided, it starts at `0`.

- **Returns:**  
  A function that, when called, returns the current count and then increases it
  by 1.

- **How it remembers:**  
  The returned function is a closure. It keeps access to the `count` variable,
  so each call updates and remembers the value.

### Implementation

```js
/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  let count = initialValue;
  return () => {
    return count++;
  };
}
```

### Example

```javascript
import makeCounter from "./1.js";

const counter = makeCounter(5);
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7

const anotherCounter = makeCounter();
console.log(anotherCounter()); // 0
console.log(anotherCounter()); // 1
```
