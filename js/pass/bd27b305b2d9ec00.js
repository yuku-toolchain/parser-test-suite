var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
var obj = {
  async *method([[...x] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
obj.method([values]).next().then(() => {}).then($DONE, $DONE);