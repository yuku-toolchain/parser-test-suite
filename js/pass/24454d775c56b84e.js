var result = false;
function callbackfn() {
  result = arguments[2][arguments[1]] === arguments[0];
}
[11].forEach(callbackfn);