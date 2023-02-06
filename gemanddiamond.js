function gemsToDiamond(friend1, friend2, friend3){
    const friend1GemsPower = friend1 * 21;
    const friend2GemsPower = friend2 * 32;
    const friend3GemsPower = friend3 * 43;
    const totalPower = friend1GemsPower + friend2GemsPower + friend3GemsPower;
    if(totalPower > 1000*2){
        return totalPower - 2000;
    } 
    else{
        return totalPower;
    }

}

const gemNumber = gemsToDiamond(100,5,1)
console.log(gemNumber)