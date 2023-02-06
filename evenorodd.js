function evenOdd(str){

    for(let i = 0; i <str.length; i++){
        if(str.length % 2 !== 0){
            return 'odd'
        }
        else{
            return 'even'
        }

    }
    return element;

}

const myString = evenOdd('chatgpt');
console.log(myString)