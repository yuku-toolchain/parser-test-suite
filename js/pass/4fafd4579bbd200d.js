var x = 0;
var callCount = 0;
var f;
f = async function* (x = x) {
  callCount = callCount + 1;
};