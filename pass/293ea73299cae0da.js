let count = 0;
var obj = {
  async method(x) {
    let a = arguments;
    return async () => a === arguments;
  }
};
let asyncFn = obj.method;
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);