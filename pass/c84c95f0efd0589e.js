var reason = {};
var obj = {
  get [Symbol.iterator]() {},
  [Symbol.asyncIterator]() {
    return {
      next() {
        return {
          done: true,
          get value() {
            throw reason;
          }
        };
      }
    };
  }
};
var callCount = 0;
class C {
  async *gen() {
    callCount += 1;
    yield* obj;
  }
}
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {}, v => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);