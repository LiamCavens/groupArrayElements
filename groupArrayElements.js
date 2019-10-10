function groupArrayElements(wholeArray, divNum) {
    // Because the initial array would get destroyed in the function.
    let newArray = wholeArray;
    let dividedArray = [];
    
    for (let i = divNum; i > 0; i--){
        // you take the array an and even it up into divNum, the Math.ceil makes
        // sure that if it is uneven they will go to the first chunk
        let chunkedNums = newArray.splice(0, Math.ceil(newArray.length / i));
        dividedArray.push(chunkedNums);
    }

    return dividedArray;
}

let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr3 = [2, 4, 6, 1, 5, 76, "Giraffe", "Seal", "Banana"]

console.log(groupArrayElements(arr, 3));
console.log(groupArrayElements(arr2, 6));
console.log(groupArrayElements(arr3, 4));