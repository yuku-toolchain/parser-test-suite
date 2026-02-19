var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var callCount = 0;
class C {
  async *method([[] = (function () {
    initCount += 1;
    return iter;
  })()] = []) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);