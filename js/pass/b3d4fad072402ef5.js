var callCount = 0;
var obj = {
  async *method({a, b, ...rest}) {
    callCount = callCount + 1;
  }
};
obj.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next().then(() => {}).then($DONE, $DONE);