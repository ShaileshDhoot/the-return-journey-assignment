// Task 1

    function uniqueArray(arr){
        const result = []
        const customSet = {}

        for(let i = 0; i<arr.length; i++){
            if(!customSet[arr[i]]){
                customSet[arr[i]]= 1
                result.push(arr[i])
            }
        }
        return result
    }

    let arr = [1,2,31,2,324,3,4,5,4,2,3,2,3,4,5,7,6]
   let uniqueArr =  uniqueArray(arr)
   console.log(uniqueArr)

// Task 2



function mergeCars(car1, car2) {

     const result = {}
    
     // add each property of car1 in obj
    for (const car1Prop in car1) {
        result[car1Prop] = car1[car1Prop];
    }

    // override the value if key exist in obj, else add the key if its property of car2 but not car1
    for (const car2Prop in car2) {
        result[car2Prop] = car2[car2Prop]
    }

    // using assign method copy all own propertie from source object to result object, can take multiple objects

    //Object.assign(result,car1,car2)

    return result


}

// const car1 = { brand: "kia", model: "newmodel"}
// const car2 = { brand: "maruti",  year: 2024}

let car1 = { brand: "kia",  year: 2024 }
let car2 = { brand: "maruti",model: "newmodel"}

let output = mergeCars(car1, car2)
console.log(output)


// Task 3

function commonEleArray(arr1, arr2) {
    const result = []
    const obj = {}

    // add all elements of array 1 in object 
    for (let i = 0; i<arr1.length; i++) {
    obj[arr1[i]] = 1
    }
    console.log(obj)
// now check if obj has element of arr2 and make operations on basis of it
    
    for (let i = 0; i<arr2.length; i++) {
        if (obj[arr2[i]]===1) {
            result.push(arr2[i])
            // that property is exist in obj , add it to result arrray as it will be common element and delete from obj 
            
            delete obj[arr2[i]]
        }
    }
  
    return result
}
let arr1 = [1,2,3,4,5,6,7,8,9]
let arr2 = [2,4,6,8,0]
let result = commonEleArray(arr1,arr2)
console.log(result)