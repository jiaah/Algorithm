function alertNames(keyName: string[], keyTime: string[]): string[] {
    const alerts = new Set([]), access = [];

    for(let i = 0; i < keyName.length; i++){
        const [hh, mm] = keyTime[i].split(':');
        const time = Number(hh) * 60 + Number(mm);
        const name = keyName[i];
        access[name] = [...access[name]?? [], time];
    }

    for(let name in access){
        const times = access[name].sort((a, b) => a - b);

        for(let t = 0; t < times.length - 2; t++){
            if(times[t + 2] && (times[t + 2] - times[t] <= 60)){
                alerts.add(name);
                break;
            }
        }
    }
    
    const result = Array.from(alerts).sort();
    return result;
};