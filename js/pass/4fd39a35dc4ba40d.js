var callCount = 0;
var obj = {
  async *method({x: y}) {
    callCount = callCount + 1;
  }
};
obj.method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);