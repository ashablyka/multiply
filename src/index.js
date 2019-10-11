module.exports = function multiply(first, second) {
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  let resultArr = [];

  for (let i = 0; i < secondArr.length; i++) {
    for (let j = 0; j < firstArr.length; j++) {
      let adder = firstArr[j] * secondArr[i];
      if (resultArr[i + j]) {
        resultArr[i + j] += adder;
      } else resultArr[i + j] = adder;
    }
  }
  
  for (let i = 0; i < resultArr.length; i++) {
    let memory = Math.floor(resultArr[i] / 10);
    resultArr[i] = resultArr[i] % 10;
    if (memory) {
      if (resultArr[i + 1]) {
      resultArr[i + 1] += memory;
      } else resultArr[i + 1] = memory;
    }
  }

  return resultArr.reverse().join('');
}