let count = 0;
var C = class {
  static async method(x) {
    return async () => x;
  }
};
let asyncFn = C.method;
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);