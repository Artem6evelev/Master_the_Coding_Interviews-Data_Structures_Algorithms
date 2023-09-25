const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

// console.log(strings[2]);

//* push - allow us to add something to the end of the array
strings.push("e"); //! O(1)
console.log(strings); // [ 'a', 'b', 'c', 'd', 'e' ]

//* pop - remove the last item from the end of the array
strings.pop(); //! O(1)
console.log(strings); // [ 'a', 'b', 'c', 'd' ]

//* unshift - allow to add something at the neginning of the array
strings.unshift("x"); //! O(n)
console.log(strings); // [ 'x', 'a', 'b', 'c', 'd' ]

//* splice - allow to add something in the middle of the array
strings.splice(2, 0, "alien"); //! O(n/2)
console.log(strings); // [ 'x', 'a', 'alien', 'b', 'c', 'd' ]

// ----------------------------
// Static vs Dynamic Arrays
