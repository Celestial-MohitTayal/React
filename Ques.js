let arr = [1,2,3,4,5];
let k = 3; // [3,2,1,5,4]

function reverseAllSubArr(arr, k){
    for(let i = 0; i < arr.length;  i+=k){
        let start = i;
        let end = i + k - 1;
        end < arr.length ? end = end : end = arr.length - 1;    
        while(start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr;
}

console.log(reverseAllSubArr(arr, k))

//-------------------------------------------------------------------------------