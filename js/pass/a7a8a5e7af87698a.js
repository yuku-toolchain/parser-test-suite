var result = false;
function callbackfn(prevVal) {
  result = prevVal === 1;
}
[11].reduce(callbackfn, 1);