var callee = 0, b;
var __obj = {
  callee: "a"
};
result = (function () {
  with (arguments) {
    callee = 1;
    b = true;
  }
  return arguments;
})(__obj);
if (callee !== 0) {}
if (__obj.callee !== "a") {}
if (result.callee !== 1) {}
if (!this.b) {}