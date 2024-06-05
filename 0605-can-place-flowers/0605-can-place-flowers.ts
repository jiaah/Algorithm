function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if(n === 0) return true;
    
    let result = false;
    const plotGroups = [];
    let groupIndex = 0;

    flowerbed.forEach((plot, index) => {
        const prevPlot = index === 0 ? 0 : flowerbed[index - 1];
        const nextPlot = index === flowerbed.length - 1 ? 0 : flowerbed[index + 1]; 
        const currPlotGroup = plotGroups[groupIndex] ?? [];

        if(prevPlot === 0 && plot === 0 && nextPlot === 0){
            plotGroups[groupIndex] = [...currPlotGroup, 0];
        } else {
            plotGroups[groupIndex] ? groupIndex += 1 : null;
        }
    });

    for(const plotGroup of plotGroups){        
        n = n - Math.ceil(plotGroup.length / 2);
        if(n <= 0) return true;
    }
    return result;
};