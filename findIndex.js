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

/**Custom Find Index */

/**
 *
 * @param {array} array
 * @param {operational callback function} cb
 * @returns index number
 */

function customFindIndex(array, cb) {
  let indexNumber = -1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const booleanCb = cb(element);
    if (booleanCb) {
      indexNumber = i;
    }
  }
  return indexNumber;
}
const findIndex = customFindIndex(users, (value) => {
  return value.user.name === "kawsar";
});
