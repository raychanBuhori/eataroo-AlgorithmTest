const number = 761238;

const convertToArrayNumber = number => {
  if (!number) return 'missing a number parameter';

  let arrNum = [];
  let result = [];
  const stringNum = number.toString();
  for (var i = 0; i < stringNum.length; i++) {
    arrNum.push(stringNum.charAt(i));
  }

  const reverseArr = arrNum.reverse();

  for (const i in reverseArr) {
    let times = reverseArr[i];
    for (let j = 0; j < i; j++) {
      times = times * 10
    }
    result.push(times)
  }

  console.log(result.reverse());

  return result.reverse();
}

convertToArrayNumber(number);