var obj = {};
var abrupt = function () {
  throw obj;
};
var callCount = 0;
var C = class {
  static async *#gen() {
    callCount += 1;
    yield* abrupt();
  }
  static get gen() {
    return this.#gen;
  }
};
var iter = C.gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);