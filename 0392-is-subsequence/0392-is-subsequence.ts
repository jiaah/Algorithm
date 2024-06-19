function isSubsequence(s: string, t: string): boolean {
    if(!s.length) return true;
    if(!t.length) return false;

    const arr = s.split('');

    for(let j = 0; j < t.length; j++){
        if(!arr.length) return true;

        if(arr[0] === t[j]) {
            arr.shift();
        }
    }
    return !arr.length
};