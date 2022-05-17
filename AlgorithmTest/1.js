const arr = [1, 2, [3, 4], 5, [6, 7], 8];
const arr2 = [1, 2, [[3, 4], 5, [6, 7]], 8]
let result;

const arrConversion = (array, d = 1) => {
  if (!array) return 'missing an array parameter';

  if (d > 0) {
    result = array.reduce((acc, val) =>
      acc.concat(
        Array.isArray(val) ? arrConversion(val, d - 1) : val
      ), []);
    return result;
  } else {
    result = array.slice();
    return result;
  }
}

console.log(arrConversion(arr2, Infinity));