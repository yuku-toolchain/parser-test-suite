var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          then: {},
          value: 42,
          done: false
        };
      }
    };
  }
};
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    yield* obj;
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
iter.next().then(({value, done}) => {}).then($DONE, $DONE);