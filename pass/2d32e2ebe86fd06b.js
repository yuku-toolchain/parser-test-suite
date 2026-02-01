var callCount = 0;
var obj = {
  async *method({a, b, ...rest} = {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  }) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);