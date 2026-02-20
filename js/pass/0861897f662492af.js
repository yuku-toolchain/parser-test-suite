let count = 0;
class C {
  static async method(x) {
    let a = arguments;
    return async () => a === arguments;
  }
}
let asyncFn = C.method;
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);