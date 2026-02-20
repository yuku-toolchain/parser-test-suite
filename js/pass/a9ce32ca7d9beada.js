let count = 0;
var C = class {
  async method(x) {
    return async () => new.target;
  }
};
let c = new C();
let asyncFn = c.method.bind(c);
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);