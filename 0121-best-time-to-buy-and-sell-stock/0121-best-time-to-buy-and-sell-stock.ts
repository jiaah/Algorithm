function maxProfit(prices: number[]): number {
    let minBuy = prices[0], maxP = 0;
    
    for(let price of prices) {
        maxP = Math.max(maxP, price - minBuy); // 현재 가격 - 최소 매수가 
        minBuy = Math.min(minBuy, price); // 최소 매수가 갱신
    }
    return maxP;
};

// TC: O(n)
// SC: O(1)