class TimeMap {
    private store: Map<string, [string, number][]>;
    constructor() {
        this.store = new Map();    
    }

    set(key: string, value: string, timestamp: number): void {
        if(!this.store.get(key)) {
            this.store.set(key, []);
        }
        this.store.get(key)!.push([value, timestamp]);
    }
    // TC: O(1)
    // SC: O(m * n), m: unique keys, n: timestamps

    get(key: string, timestamp: number): string {
        const data = this.store.get(key);
        if(!data) { 
            return "";
        }

        let left = 0;
        let right = data.length - 1;
        let result = ''

        while(left <= right){
            const mid = left + Math.floor((right - left)/2);

            if(data[mid][1] <= timestamp) {
                result = data[mid][0]
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
    // TC: O(log n)
    // SC: O(1)
}

/**
 * Your store object will be instantiated and called as such:
 * var obj = new store()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */