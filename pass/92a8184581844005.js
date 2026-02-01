var accessed = false;
var objFunction = function () {};
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objFunction;
}