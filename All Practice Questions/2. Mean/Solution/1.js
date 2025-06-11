/**
 * @param {Array} array - Array from which the elements are all numbers.
 * @return {Number} Returns mean.
 */
export default function mean(array) {
  if (array.length === 0) return NaN;
  const sum = array.reduce((acc, num) => acc + num, 0);
  return sum / array.length;
}
