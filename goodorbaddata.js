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

const myData = [4, 9, 5, 33, 55];
const findData = findingBadData(myData);
console.log(findData)