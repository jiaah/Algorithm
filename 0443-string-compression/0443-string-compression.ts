function compress(chars: string[]) {
    let startIndex = 0

    while(startIndex < chars.length){
       
        const currChar = chars[startIndex];
        let count = 1;

        for(let j = startIndex+1; j < chars.length; j++){
            if(chars[j] === currChar){
                count++;
                chars.splice(j, 1);
                j--;
            } else {
                break;
            }
        };

        if(count > 1){
            const countArray = count >= 10? count.toString().split('') : [count.toString()];
            chars.splice(startIndex+1, 0, ...countArray);

            startIndex += 1 + countArray.length;
        } else {
            startIndex++;
        };
    };
    
};

