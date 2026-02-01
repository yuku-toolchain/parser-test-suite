var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next: true
    };
  }
};
var callCount = 0;
class C {
  static async *#gen() {
    callCount += 1;
    yield* obj;
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);