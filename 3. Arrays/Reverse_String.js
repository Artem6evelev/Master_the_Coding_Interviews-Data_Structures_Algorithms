function reverse(str) {
  if (!str || typeof str !== "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  // console.log("totalItems", totalItems);
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("Artem"));
// console.log(reverse("Timbits Hi"));
// console.log(reverse3("Timbits Hi"));
