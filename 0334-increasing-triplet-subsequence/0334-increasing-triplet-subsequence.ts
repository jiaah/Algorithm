function increasingTriplet(nums: number[]): boolean {
    let smallest = Infinity;
    let secSmallest = Infinity;

    for(const num of nums){
        if(num < smallest && num < secSmallest){
            smallest = num;
            continue;
        };
        if(num > smallest && num < secSmallest){
            secSmallest = num;
            continue;
        };
        if(num > smallest && num > secSmallest){
            return true;
        }
    }
    return false;
};
