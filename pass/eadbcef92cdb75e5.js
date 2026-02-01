var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val > 10;
}
var objOne = {
  0: 9,
  length: "Infinity"
};
var objTwo = {
  0: 9,
  length: "+Infinity"
};
var objThree = {
  0: 9,
  length: "-Infinity"
};