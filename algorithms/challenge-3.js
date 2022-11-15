function increment(arr, value) {

    for (let index = 0; index < arr.length; index++) {
        arr[index].val+=value
        
    }
    return arr
}
console.log(increment([{ val: 1 }, { val: 2}, { val: 3 }], 2));

