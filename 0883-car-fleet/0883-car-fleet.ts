type Car = [time: number, speed: number];

function carFleet(target: number, position: number[], speed: number[]): number {
    const fleetTimes:number[] = [];
    const cars:Car[] = position
        .map((x, index):Car => [x, speed[index]])
        .sort((a, b) => b[0] - a[0]);

    for(const [x, s] of cars){
        const time = (target - x)/s;
        const lastFleetTime = fleetTimes[fleetTimes.length - 1];

        if(lastFleetTime && lastFleetTime > time) {
            fleetTimes.push(lastFleetTime); // Merge into the current fleet
        } else {
            fleetTimes.push(time); // Start a new fleet
        }
    }

    const uniquefleets = new Set(fleetTimes);
    return uniquefleets.size;
};

// TC: O(n)
// SC: O(n)