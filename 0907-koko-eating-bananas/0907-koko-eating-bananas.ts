function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    let minSpeed = right;

    const canEatAll = (speed) => {
        let totalTime = 0;

        for(let pile of piles){
            totalTime += Math.ceil(pile / speed); 
            if(totalTime > h) { return false };
        }
        return true;
    }
    
    while(left <= right) {
        const speed = Math.floor((left + right) / 2);

        if(canEatAll(speed)){
            minSpeed = speed; // Try for a smaller valid speed
            right = speed - 1;  // Increase speed to meet time constraint
        } else {
            left = speed + 1;
        }
    }
    return minSpeed;
};

// TC: O(n*log(m)), n= number of piles, m= max number of bananas in a pile
// SC: O(1)

