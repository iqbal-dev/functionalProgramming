var number = [1, 2, 3, 4, 5];
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
