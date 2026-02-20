__func.valueOf = function () {
  return "gnulluna";
};
__func.toString = function () {
  return __func;
};
Function.prototype.slice = String.prototype.slice;
if (__func.slice(null, Function().slice(__func, 5).length) !== "gnull") {}
function __func() {}