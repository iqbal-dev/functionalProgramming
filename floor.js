/**
 *
 * @param {number} number
 * @param {number} afterFraction
 * @returns number
 */
function customFloor(number, afterFraction) {
  let newNumber = number.toString().split(".");
  if (newNumber < 1) {
    if (!afterFraction) {
      return Number(newNumber[0]);
    } else {
      let newFraction = "";

      for (let i = 0; i < afterFraction; i++) {
        newFraction += i <= newNumber[1]?.length - 1 ? newNumber[1][i] : "0";
      }
      return Number(newNumber[0] + "." + newFraction);
    }
  } else {
    let result = newNumber[0].split("");
    for (let i = 0; i < afterFraction; i++) {
      result[result.length - 1 - i] = "0";
    }
    return Number(result.join(""));
  }
}
console.log(customFloor(4.06));
