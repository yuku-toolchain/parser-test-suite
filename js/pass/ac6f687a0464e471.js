var count = 0;
var callCount = 0;
var obj = {
  async *method({...x} = {
    get v() {
      count++;
      return 2;
    }
  }) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);