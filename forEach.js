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
/**Custom Foreach */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 *
 * @param {array} values
 * @param {operational callback function} cb
 * @returns a new array
 */
function customForEach(values, cb) {
  let newArray = [];
  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    newArray.push(cb(element));
  }
  return newArray;
}

const forEach = customForEach(users, (value) => {
  return {
    ...value,
    active: true,
  };
});
