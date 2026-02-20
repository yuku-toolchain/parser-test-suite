var iter = (function* () {})();
iter.next();
var callCount = 0;
class C {
  async *method([]) {
    callCount = callCount + 1;
  }
}
new C().method(iter).next().then(() => {}).then($DONE, $DONE);