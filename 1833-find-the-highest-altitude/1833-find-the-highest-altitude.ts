function largestAltitude(gain: number[]): number {
    let highest = 0, sum = 0;

    for(let altitude of gain){
        sum = sum + altitude;
       
        if(sum > highest){
            highest = sum;
        }
    }
    return highest;
};