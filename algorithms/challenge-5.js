function arraySum(arr1, arr2) {
    let output=[]
    let num = 0
    while (num<arr1.length) {
        for (let index = 0; index < arr2.length; index++) {
            if (arr1[num]) {
                output.push(arr1[num]+arr2[index])
                num++
            }
            
        }
    }
    return output
}
console.log(arraySum([10,20,30,40,50], [20,40,60]));