/*
This fuction received a string value by parameter. In the function declare a loop for iterate every element than set a condition if input.length Remainder  by 2 does not equal 0 so it's a odd otherwise it's a even than return the value. 

*/ 
function evenOdd(str) {
    if(typeof str !== 'string'){
        return 'Input should be a string.'
    }
    for (let i = 0; i < str.length; i++) {
        if (str.length % 2 !== 0) {
            return 'odd'
        }
        else {
            return 'even'
        }
    }
    return element;

}

const myString = evenOdd(55);
console.log(myString)