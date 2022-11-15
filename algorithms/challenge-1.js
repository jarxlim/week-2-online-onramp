function missingNumber(numArr) {
    let output = []
    for (let index = 1; index <= 9; index++) {
      if (!numArr.includes(index)) {
        output.push(index)
      }
    }
    return output
}
console.log(missingNumber([1,2,3,4,5,6,7,8,9]));
