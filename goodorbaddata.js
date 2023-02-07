
/*
The function received a parameter.In the function declare loop for iterate every item to find which is odd number and which is enven number.Than declare a empty array by the name of result in the loop declare a condition if element less than 0 so push the element in the result array and return the result.

*/ 

function findingBadData(data){
    if(typeof data !== 'object'){
        return 'Please give valid array'
    }
    const result = [];
    for(let i = 0; i < data.length; i++){
        let element = data[i];
        if(element < 0){
            result.push(element)
        }
    }
    return result.length;
}

const myData =[-3,3];
const findData = findingBadData(myData);
console.log(findData)