let count = 0;
var C = class {
  static async method(x) {
    let a = arguments;
    return async () => a === arguments;
  }
};
let asyncFn = C.method;
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);