// Give 2 arrays, create a function that let's a user know
// (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
// should return false
// --------------------
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'x']
// should return true

const arr1 = ["a", "b", "c", "x"];
const arr2 = ["z", "y", "x"];

// NOT A BEST SOLUTION
// // O(n^2)
// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(arr1, arr2));

// BETTER SOLUTION
// array 1 ===> obj {
// a: true,
// b: true,
// c: true,
// x: true,
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // 1. loop through first array and create object where properties === items
  // in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[i]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // 2. loop through second array and check if item in second array
  // exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a + b) Time Complexity is better
// O(a) Space complexity
console.log(containsCommonItem2(arr1, arr2));

// Another solution more readable
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(arr1, arr2));

// ---------------------------------
// Naive
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// ---------------------------------
// Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

hasPairWithSum2([6, 4, 3, 2, 1, 7], 9);
