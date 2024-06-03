const findMaxCandies = (candies: number[]) => {
    let maxCandy:number = candies[0]
    candies.forEach(candy => maxCandy < candy ? maxCandy = candy : null)
    return maxCandy;
}

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandy = findMaxCandies(candies);
    return candies.map(candy => Boolean(candy + extraCandies >= maxCandy));
};