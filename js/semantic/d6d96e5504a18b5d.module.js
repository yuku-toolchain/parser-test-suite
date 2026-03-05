this.callee = 0;
var b;
__obj = {
  callee: "a"
};
function f() {
  with (arguments) {
    callee = 1;
    b = true;
    return arguments;
  }
}
result = f(__obj);
if (callee !== 0) {}
if (__obj.callee !== "a") {}
if (result.callee !== 1) {}
if (!this.b) {}