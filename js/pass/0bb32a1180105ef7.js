let error = new Error();
let iterable = [Promise.reject(error), "unreachable"];
var callCount = 0;
var C = class {
  async *gen() {
    callCount += 1;
    for await (let value of iterable) {
      yield value;
    }
  }
};
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);