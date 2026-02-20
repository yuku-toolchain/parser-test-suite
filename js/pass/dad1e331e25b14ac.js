var values = [1, 2, 3];
var callCount = 0;
var C = class {
  static async *method([...[...x]]) {
    callCount = callCount + 1;
  }
};
C.method(values).next().then(() => {}).then($DONE, $DONE);