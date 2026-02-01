var count = 0;
var callCount = 0;
var C = class {
  static async *method({...x}) {
    callCount = callCount + 1;
  }
};
C.method({
  get v() {
    count++;
    return 2;
  }
}).next().then(() => {}).then($DONE, $DONE);