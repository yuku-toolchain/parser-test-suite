let error = new Error();
var callCount = 0;
var C = class {
  static async *gen() {
    callCount += 1;
    yield Promise.reject(error);
    yield "unreachable";
  }
};
var gen = C.gen;
var iter = gen();
iter.next().then(() => {}).catch(rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
});