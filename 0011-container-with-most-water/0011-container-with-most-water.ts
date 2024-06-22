

function maxArea(height: number[]): number {
    let l = 0, r = height.length -1, result = 0;

    while(l < r) {
        const leftY = height[l];
        const rightY = height[r];
        let amount = 0;

        if(leftY < rightY) {
            console.log('left', r - l, leftY)
            amount = (r - l) * leftY;
            l++;
        } else {
            console.log('right', r - l, rightY)
            amount = (r - l) * rightY;
            r--
        };

        if(result < amount){
            result = amount;
        }
    };

    

    // for(let i=0; i<height.length; i++){
    //     if(height[i] === 0) continue;

    //     for(let j=i+1; j<height.length; j++){
    //         const x = j - i;
    //         const y = Math.min(height[i], height[j])
    //         const amount = x * y;
    //         if(result >= amount) continue;        
    //         result = amount;
            
    //     };
    // };
    
    return result;
};