const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo"); // nemo 100 times

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
    }
  }
  console.log("Call to find Nemo took" + t1 - t0 + " milliseconds");
}

findNemo(large);

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);
