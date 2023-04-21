// const basket = ['apples', 'grapes', 'pears']

// linked list: apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

const obj1 = { a: true };
const obj2 = obj1;
obj1.a = "boooya";

delete obj1;

console.log(obj1);
console.log(obj2);
