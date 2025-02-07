const result = (a, b) => {
  return new Promise((resolve) => {
    const startTime = Date.now();
    setTimeout(() => {
      setTimeout(() => {
        const elapsed = Math.floor(Date.now() - startTime);
        resolve(elapsed);
      }, b);
    }, a);
  });
};

const run = async (result) => {
  const result1 = await result(10, 15);
  console.log("1:",result1);
};

run(result);

//-------------------------------------------------------------------------------

const a1=10;
const a2=8;
const result2 = [a2,a1][+(a1<a2)];
console.log("2:",result2)

//-------------------------------------------------------------------------------

const arr = [4, 5, 2, 1, 8, 7, 3, 6];

const operateOnArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log("3:", arr[i]), arr[i]);
  }
};
operateOnArr(arr);
