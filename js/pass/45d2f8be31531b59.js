var __FOO = "fooValue";
var __BAR = "barValue";
function __func(arg) {
  this.foo = arg;
  return true;
  this.bar = arguments[1];
}
var __obj = new __func(__FOO, __BAR);
if (__obj.foo !== __FOO) {}
if (__obj.bar !== undefined) {}