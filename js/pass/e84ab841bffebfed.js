var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var C = class {
  method([w = counter(), x = counter(), y = counter(), z = counter()] = [null, 0, false, '']) {
    callCount = callCount + 1;
  }
};
new C().method();