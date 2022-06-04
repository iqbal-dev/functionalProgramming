/**
 * Custom Filter function
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var users = [
  {
    user: "iqbal",
    active: false,
  },
  {
    user: "iqbal",
    active: false,
  },
  {
    user: "kawsar",
    active: true,
  },
];

/**
 *
 * @param {array} array array of data
 * @param {function} cb operational function
 * @returns new array of data
 */
function customFilter(array, cb) {
  const filteredData = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (cb(element)) {
      filteredData.push(element);
    }
  }
  return filteredData;
}

console.log(
  customFilter(users, (value) => {
    return value.active === true;
  })
);
console.log(
  customFilter(numbers, (value) => {
    return value > 5;
  })
);
