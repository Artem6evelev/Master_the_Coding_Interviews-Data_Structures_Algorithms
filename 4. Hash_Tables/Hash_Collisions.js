const user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhhh!");
  },
};

console.log(user.age); // O(1)
console.log((user.spell = "abra kadabra")); // O(1)
console.log(user.scream()); // O(1)

// O(n/k)

const a = new Map(); // set any datatype as a key,
const b = new Sets();
