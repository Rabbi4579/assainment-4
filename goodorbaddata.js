
/*
The function received a parameter.In the function declare loop for iterate every item to find which is odd number and which is enven number.Than declare a empty array by the name of result in the loop declare a condition if element less than 0 so pussing the element in the result array and return the result.

*/ 

function findingBadData(data){

    const result = [];
    for(let i = 0; i < data.length; i++){
        let element = data[i];
        if(element < 0){
            result.push(element)
        }
    }
    return result.length;
}

const myData = [4, -9, 5, -33, 55];
const findData = findingBadData(myData);
console.log(findData)