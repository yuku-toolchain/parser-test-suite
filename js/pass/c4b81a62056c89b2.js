let count = 0;
var C = class {
  static async method(x) {
    return async () => new.target;
  }
};
let asyncFn = C.method;
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);