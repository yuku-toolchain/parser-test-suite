var __FRST, __SCND, __func, __obj__;
__FRST = "one";
__SCND = "two";
__func = function (arg1, arg2) {
  this.first = arg1;
  var __obj = {
    second: arg2
  };
  return __obj;
};
__obj__ = new __func(__FRST, __SCND);
if (__obj__.first !== undefined) {}
if (__obj__.second !== __SCND) {}