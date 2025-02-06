let arr1 = [1,2,3,4,5];
let k = 3; // [3,2,1,5,4]

function reverseAllSubArr(arr1, k){
    for(let i = 0; i < arr1.length;  i+=k){
        let start = i;
        let end = i + k - 1;
        end < arr1.length ? end = end : end = arr1.length - 1;    
        while(start < end) {
            [arr1[start], arr1[end]] = [arr1[end], arr1[start]];
            start++;
            end--;
        }
    }
    return arr1;
}

console.log(reverseAllSubArr(arr1, k))

//-------------------------------------------------------------------------------
// Q5.List of all firstName from array whose age is more than 30
const users = [
    { firstName: "john", lastName: "Biden", age: 26 },
    { firstName: "jimmy", lastName: "Cob", age: 75 },
    { firstName: "Sam", lastName: "Lewis", age: 50 },
    { firstName: "Ronald", lastName: "Mathew", age: 26 },
  ];
  
  for(let elem of users){
      if(elem.age > 30){
          console.log(elem.firstName);
      }
  }

//-------------------------------------------------------------------------------
let arr = [1,2,3,4,5]

//Map Polyfill
Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const mappedArray = arr.myMap((elem, i) => {
    return elem * 2;
})

console.log(mappedArray)

//Filter Polyfill
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            temp.push(this[i]);
        }
    }
    return temp;
}

const filterArray = arr.myFilter((elem) => {
    return elem > 2;
})

console.log(filterArray);

//Reduce Polyfill
Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;
    for(let i = 0; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
}

const reducedValue = arr.myReduce((acc, curr) => {
    return acc += curr;
}, 0)

console.log(reducedValue)

//ForEach Polyfill
Array.prototype.myForeach = function(cb) {
    for(let i = 0; i < this.length; i++){
        cb(this[i], i)
    }
}

arr.myForeach((elem, i) => {
    arr[i] = elem + 1;
})

console.log(arr);




