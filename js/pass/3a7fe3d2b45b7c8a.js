__func.valueOf = function () {
  return "gnulluna";
};
Function.prototype.substring = String.prototype.substring;
if (__func.substring(null, Function()) !== "") {}
function __func() {}