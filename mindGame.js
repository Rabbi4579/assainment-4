/*
 This function received a parameter number than multiplication number by 3 after multiplication, addition by 10 than division by 2 at last substraction by 5 than nreturn the value.

*/
function mindGame(number) {

    if (typeof number !== 'number') {
        return 'It should be a number'
    }

    const multiply = Math.abs(number) * 3;
    const addition = multiply + 10;
    const Division = addition / 2;
    const substraction = Division - 5;
    return substraction;

}

let myNumbers = mindGame(50);
console.log(myNumbers)

