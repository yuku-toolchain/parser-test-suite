var __FRST = "one";
var __SCND = "two";
function __func(arg1, arg2) {
  this.first = arg1;
  var __obj = {
    second: arg2
  };
  return __obj;
}
var __obj__ = new __func(__FRST, __SCND);
if (__obj__.first !== undefined) {}
if (__obj__.second !== __SCND) {}