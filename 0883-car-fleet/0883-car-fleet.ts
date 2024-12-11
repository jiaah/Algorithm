type Car = [time: number, speed: number];

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars:Car[] = position
        .map((x, index):Car => [x, speed[index]])
        .sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let reachingTime = 0;

    for(const [x, s] of cars){
        const time = (target - x)/s;

        if(time > reachingTime) {
            fleets++; // Start a new fleet
            reachingTime = time; 
        } 
    }

    return fleets;
};

// TC: O(n)
// SC: O(1)