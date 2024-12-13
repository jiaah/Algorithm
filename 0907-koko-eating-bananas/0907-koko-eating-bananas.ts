function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let minSpeed = right;
    
    while(left <= right) {
        const speed = Math.floor((left + right) / 2);
        let totalTime = 0;

        piles.forEach(pile => {
            totalTime += Math.ceil(pile / speed); 
        }) 

        if(totalTime <= h){
            minSpeed = speed; // Update minSpeed to the current valid candidate
            right = speed - 1;  // Narrow the range to search for smaller valid speeds
        } else {
            left = speed + 1;
        }
    }
    return minSpeed;
};

// TC: O(n*log(m)), n= number of piles, m= max number of bananas in a pile
// SC: O(1)

