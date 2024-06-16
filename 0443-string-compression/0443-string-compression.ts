function compress(chars: string[]): number {
    let i=0, ansIndex=0, endIndex=chars.length-1;

    while(i <= endIndex){
        let j = i + 1;

        while(j <= endIndex && chars[i] === chars[j]){
            j++
        };

        const count = j - i;
        chars[ansIndex] = chars[i];
        ansIndex++;

        if(count > 1){
            const countStr = count.toString();

            for(const char of countStr){
                console.log(char);
                chars[ansIndex] = char;
                ansIndex++;
            }
        };

        i = j;
    }

    return ansIndex;
};

