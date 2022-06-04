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
  return value.user.name === "Shakil";
});

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

/** Custom reducer  */
/**
 *
 * @param {array} array
 * @param {operational call back function} cb
 * @param {which type of value return} returnValueType
 * @returns returnValueType value
 */
function customReduce(array, cb, returnValueType) {
  let returnValue;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    returnValue = cb(array[i - 1], element, i, array);
  }
  if (typeof returnValue === typeof returnValueType) {
    return returnValue;
  } else {
    return returnValueType;
  }
}

const reduce = customReduce(
  numbers,
  (prev, curr) => {
    prev += curr;

    return prev;
  },
  0
);
console.log(reduce);
