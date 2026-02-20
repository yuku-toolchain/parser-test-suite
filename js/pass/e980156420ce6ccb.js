let error = new Error();
var callCount = 0;
class C {
  async *gen() {
    callCount += 1;
    yield Promise.reject(error);
    yield "unreachable";
  }
}
var gen = C.prototype.gen;
var iter = gen();
iter.next().then(() => {}).catch(rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
});