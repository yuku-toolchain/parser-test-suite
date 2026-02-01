var callCount = 0;
var obj = {
  async *method({w: [x, y, z] = [4, 5, 6]}) {
    callCount = callCount + 1;
  }
};
obj.method({}).next().then(() => {}).then($DONE, $DONE);