const vowels = ['a', 'e', 'i', 'o', 'u'];
const findVowel = (char: string): string | null => vowels.includes(char.toLowerCase()) ? char : null;

function reverseVowels(str: string): string {
    const arr = str.split('');

    let startIndex: number = 0;
    let endIndex:number = str.length -1;

    while(startIndex <= endIndex){
        const startVowel = findVowel(arr[startIndex]);
        const endVowel = findVowel(arr[endIndex]);

        if(startVowel && endVowel){
            arr[startIndex] = endVowel;
            arr[endIndex] = startVowel;
            startIndex++;
            endIndex--;
        } else {
            if(!startVowel){
                startIndex++
            };
            if(!endVowel){
                endIndex--
            };
        }
       

    }
    return arr.join('');
};