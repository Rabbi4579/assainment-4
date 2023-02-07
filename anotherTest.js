function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== 'number') {
    return 'friend 1 input should be a number.';
    }
    else if (typeof friend2 !== 'number') {
    return 'friend 2 input should be a number.';
    }
    else if (typeof friend3 !== 'number') {
    return 'friend 3 input should be a number.';
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

    const myNumber = gemsToDiamond('100',5,1);
    console.log(myNumber)