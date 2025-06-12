function getTimeToTarget (target: number, position: number, speed: number): number { 
    return (target - position) / speed 
};

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position.map((pos, index) => [pos, speed[index]]);
    cars.sort((a, b) => b[0] - a[0]); // sort by position descending

    const fleet: number[] = [];

    for(const [pos, spd] of cars) {
        const timeToTarget = getTimeToTarget(target, pos, spd);
        const lastFleetTime = fleet[fleet.length - 1];

        if(!fleet.length || timeToTarget > lastFleetTime) { 
            fleet.push(timeToTarget);
        }
    }
    
    return fleet.length;
};

// TC: O(n log n)
// SC: O(n)