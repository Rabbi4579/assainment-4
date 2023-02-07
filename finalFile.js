/*
 This function received a input parameter number than multiplication number by 3 after multiplication, addition by 10 than division by 2 at last substraction by 5 than nreturn the value.

*/
function mindGame(number) {

    if (typeof number !== 'number') {
        return 'Input should be a number'
    }

    const multiply = number * 3;
    const addition = multiply + 10;
    const Division = addition / 2;
    const substraction = Division - 5;
    return substraction;

}


/*
This fuction received a string value by parameter. In the function declare a loop for iterate every element than set a condition if input.length Remainder  by 2 does not equal 0 so it's a odd otherwise it's a even than return the value. 

*/

function evenOdd(str) {
    if (typeof str !== 'string') {
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


/*
The function received a perameter value number.Than number substraction by 7.
after substraction declare a condition if substraction value lessthan 7 it's return just substraction value otherwise return the perameter value with multiplication by 2.

*/

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Input should be a Number.'
    }

    const substraction = number - 7;
    if (substraction < 7) {
        return substraction;
    }
    else {
        return number * 2;
    }
}



/*
The function received a parameter.In the function declare loop for iterate every item to find which is odd number and which is enven number.Than declare a empty array by the name of result in the loop declare a condition if element less than 0 so push the element in the result array and return the result.

*/

function findingBadData(data) {
    if (typeof data !== 'object') {
        return 'Input should be an array.'
    }
    const result = [];
    for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if (element < 0) {
            result.push(element)
        }
    }
    return result.length;
}


/*
gemsToDiamond function received there perameter and it's contain there friends gems number.First of all it's multiplication with constant per gems power than addition there friends multiplication value into totalPower.Than Declare a condition if totalPower gatter than 1000 multiplicatiion by 2 so return totalPower - 2000 Otherwise return just totalPower. There is also a condition if input value does not a number send a alert messege to Please give a number.
*/


function gemsToDiamond(friend1, friend2, friend3) {

    if (typeof friend1 !== 'number') {
        return 'friend 1 input should be a number.';
    }
    else if (typeof friend2 !== 'number') {
        return 'friend 2 input should be a number.';
    }
    else if (typeof friend3 !== 'number') {
        return 'friend 3 input  should be a number.';
    }

    const friend1GemsPower = friend1 * 21;
    const friend2GemsPower = friend2 * 32;
    const friend3GemsPower = friend3 * 43;
    const totalPower = friend1GemsPower + friend2GemsPower + friend3GemsPower;

    if (totalPower > 1000 * 2) {
        return totalPower - 2000;
    }
    else {
        return totalPower;
    }

}