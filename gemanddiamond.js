/*
gemsToDiamond function received there perameter and it's contain there friends gems number.First of all it's multiplication with constant per gems power than addition there friends multiplication value into totalPower.Than Declare a condition if totalPower gatter than 1000 multiplicatiion by 2 so return totalPower - 2000 Otherwise return just totalPower. There is also a condition if input value does not a number send a alert messege to Please give a number.
*/ 


function gemsToDiamond(friend1, friend2, friend3) {

    if (typeof friend1 !== 'number') {
        return 'Please give a number';
    }
    else if (typeof friend2 !== 'number') {
        return 'please give a number';
    }
    else if (typeof friend3 !== 'number') {
        return 'please give a number';
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

const gemNumber = gemsToDiamond(1, 1, 1)
console.log(gemNumber)