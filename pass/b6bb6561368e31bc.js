var values = [1, 2, 3, 4, 5];
var callCount = 0;
var obj = {
  async *method([...x]) {
    callCount = callCount + 1;
  }
};
obj.method(values).next().then(() => {}).then($DONE, $DONE);