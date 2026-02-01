let count = 0;
var obj = {
  async method(x) {
    return async () => x;
  }
};
let asyncFn = obj.method;
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);