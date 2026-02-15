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
var C = class {
  static async *#gen() {
    callCount += 1;
    yield* obj;
  }
  static get gen() {
    return this.#gen;
  }
};
var iter = C.gen();
iter.next().then(({value, done}) => {}).then($DONE, $DONE);