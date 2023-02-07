/*
The function received a perameter value number.Than number substraction by 7.
after substraction declare a condition if substraction value lessthan or equal 7 it's return just substraction value otherwise return the perameter value with multiplication by 2.

*/ 

function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'Input should be a Number.'
    }
    const substraction = number - 7;
    if(substraction < 7){
        return substraction;
    }
    else{
        return number * 2;
    }
}

const myNumber = isLGSeven(15);
console.log(myNumber)