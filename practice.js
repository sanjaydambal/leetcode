const arr = [3,4,2,3,16,3,15,16,15,15,16,2,3]
const arr2 = arr.sort((a,b)=>a-b)
const duparr = arr2.reverse();
const oriarr = [...new Set(duparr)];
const largestNumbers = oriarr.slice(0,3);
console.log(largestNumbers);