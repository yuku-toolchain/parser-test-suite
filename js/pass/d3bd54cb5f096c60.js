let count = 0;
var C = class {
  static async #method(x) {
    return async () => new.target;
  }
  static async method(x) {
    return this.#method(x);
  }
};
let asyncFn = C.method.bind(C);
asyncFn().then(retFn => {
  count++;
  return retFn();
}).then(result => {}).then($DONE, $DONE);