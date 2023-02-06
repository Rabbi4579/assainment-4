function isLGSeven(number){
    const substraction = number - 7;
    if(substraction <= 7){
        return substraction;
    }
    else{
        return number * 2;
    }
}

const myNumber = isLGSeven(15);
console.log(myNumber)