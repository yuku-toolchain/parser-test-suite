let count = 0;
var obj = {
  async method(x) {
    return async () => new.target;
  }
};
let asyncFn = obj.method;
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);