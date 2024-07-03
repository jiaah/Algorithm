function largestAltitude(gain: number[]): number {
    let highest = 0, sum = 0;

    gain.forEach(altitude => {
        sum = sum + altitude;
       
        if(sum > highest){
            highest = sum;
        }
    });
    
    return highest;
};