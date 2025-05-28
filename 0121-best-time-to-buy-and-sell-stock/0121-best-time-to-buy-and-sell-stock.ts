function maxProfit(prices: number[]): number {
    let l = 0, maxP = 0;
    for(let r = 0; r < prices.length; r++) {
        if(prices[l] < prices[r]) {
            maxP = Math.max(maxP, prices[r] - prices[l]);
        } else {
            l = r;
        }
    }
    return maxP;
};

// TC: O(n)
// SC: O(1)