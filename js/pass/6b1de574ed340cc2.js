var initCount = 0;
var callCount = 0;
var obj = {
  async *method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
obj.method([[23]]).next().then(() => {}).then($DONE, $DONE);