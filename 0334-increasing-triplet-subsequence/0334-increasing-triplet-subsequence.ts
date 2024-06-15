function increasingTriplet(nums: number[]): boolean {
    let smallest = Infinity;
    let secSmallest = Infinity;

    for(const num of nums){
        if(num <= smallest){
            smallest = num;
        } else if(num <= secSmallest){
            secSmallest = num;
        } else {
            return true;
        }
    }
    return false;
};