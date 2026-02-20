var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
var C = class {
  method([[] = g()]) {
    callCount = callCount + 1;
  }
};
new C().method([[]]);