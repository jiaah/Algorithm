function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if(n === 0) return true;

    for(let i=0; i<flowerbed.length; i++){
        const prevPlot = flowerbed[i - 1] ?? 0;
        const nextPlot = flowerbed[i + 1] ?? 0;

        if(prevPlot === 0 && flowerbed[i] === 0 && nextPlot === 0){
            n -= 1;
            if(n <= 0) return true;
            flowerbed[i] = 1;
        }
    }
    return false;
};