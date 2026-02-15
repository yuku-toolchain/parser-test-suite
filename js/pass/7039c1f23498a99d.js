var values = [1, 2, 3];
var callCount = 0;
var obj = {
  async *method([...[...x]] = values) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);