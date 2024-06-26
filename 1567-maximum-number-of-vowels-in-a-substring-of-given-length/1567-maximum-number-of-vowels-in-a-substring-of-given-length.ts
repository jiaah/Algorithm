const regex = /[aeiou]/;

function maxVowels(s: string, k: number): number {
    const arr = s.split('');
    let curVowels = 0;

    for(let i = 0; i < k; i++){
        if(regex.test(arr[i])){
            curVowels++;
        }
    };

    let maxVowels = curVowels;

    for(let j = k; j < arr.length; j++){
        if(curVowels > 0 && regex.test(arr[j-k])){
            curVowels--;
        } 
        if(regex.test(arr[j])){
            curVowels += 1;
        }
        maxVowels = Math.max(curVowels, maxVowels);
    }

    return maxVowels;
};