var callCount = 0;
var C = class {
  static async *method({a, b, ...rest}) {
    callCount = callCount + 1;
  }
};
C.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next().then(() => {}).then($DONE, $DONE);