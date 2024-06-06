const vowels = ['a', 'e', 'i', 'o', 'u'];
const findVowel = (char: string): string | null => vowels.includes(char.toLowerCase()) ? char : null;

function reverseVowels(str: string): string {
    const arr = str.split('');

    let leftIndex: number = 0;
    let rightIndex:number = str.length -1;

    while(leftIndex <= rightIndex){
        const leftVowel = findVowel(arr[leftIndex]);
        const rightVowel = findVowel(arr[rightIndex]);

        if(leftVowel && rightVowel){
            arr[leftIndex] = rightVowel;
            arr[rightIndex] = leftVowel;
            leftIndex++;
            rightIndex--;
        } else {
            if(!leftVowel){
                leftIndex++
            };
            if(!rightVowel){
                rightIndex--
            };
        }
    }
    return arr.join('');
};