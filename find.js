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
 * @param {array} array array of data to
 * @param {function} cb operational function to
 * @returns return a value
 */
function customFind(array, cb) {
  let findData;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (cb(element)) {
      findData = element;
    }
  }
  return findData;
}

console.log(
  customFind(users, (value) => {
    return value.user === "iqbal";
  })
);
