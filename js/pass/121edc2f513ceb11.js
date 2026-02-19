var __FOO, __BAR, __func, __obj;
__FOO = "fooValue";
__BAR = "barValue";
__func = function (arg) {
  this.foo = arg;
  return 0;
  this.bar = arguments[1];
};
__obj = new __func(__FOO, __BAR);
if (__obj.foo !== __FOO) {}
if (__obj.bar !== undefined) {}