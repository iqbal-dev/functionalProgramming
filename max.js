function customMax(array) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > max) {
      max = element;
    }
  }

  return max;
}

console.log(customMax([4, 2, 8, 6]));
