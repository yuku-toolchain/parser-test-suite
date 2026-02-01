let count = 0;
var obj = {
  async method(x) {
    let a = arguments;
    return async function () {
      return a === arguments;
    };
  }
};
let asyncFn = obj.method;
asyncFn(1).then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);