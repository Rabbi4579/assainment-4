function mindGame(number){
    const multiply = number * 3;
    const addition = multiply + 10;
    const Division = addition / 2;
    const substraction = Division - 5;
    return substraction;
}

let myNumbers = mindGame(50);
console.log(myNumbers)