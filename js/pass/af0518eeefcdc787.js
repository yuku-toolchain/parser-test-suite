var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
var obj = {
  async *method([[] = g()]) {
    callCount = callCount + 1;
  }
};
obj.method([[]]).next().then(() => {}).then($DONE, $DONE);