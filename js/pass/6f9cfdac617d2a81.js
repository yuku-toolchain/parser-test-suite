var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
var obj = {
  async *method([[...x] = (function () {
    initCount += 1;
  })()] = [values]) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);