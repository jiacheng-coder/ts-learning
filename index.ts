let obj = {
  1: "bart",
  2: "lucy",
};
let arr = Object.keys(obj);
arr.forEach((item) => {
  console.log(typeof item);
});
