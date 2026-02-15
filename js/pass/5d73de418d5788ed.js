var objFunction = function () {};
function callbackfn(val, idx, obj) {
  return this === objFunction;
}