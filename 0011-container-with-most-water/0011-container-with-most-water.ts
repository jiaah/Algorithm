

function maxArea(height: number[]): number {
    let l = 0, r = height.length -1, result = 0;

    while(l < r) {
        const leftY = height[l];
        const rightY = height[r];
        let amount = 0;

        if(leftY < rightY) {
            amount = (r - l) * leftY;
            l++;
        } else {
            amount = (r - l) * rightY;
            r--
        };

        if(result < amount){
            result = amount;
        }
    };
    
    return result;
};