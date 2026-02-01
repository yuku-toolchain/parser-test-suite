var arg;
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}
var func = function (a, b) {
  arg = arguments;
  return Array.prototype.reduceRight.call(arguments, callbackfn, 11);
};