let error = new Error();
var callCount = 0;
var C = class {
  async *#gen() {
    callCount += 1;
    yield Promise.reject(error);
    yield "unreachable";
  }
  get gen() {
    return this.#gen;
  }
};
const c = new C();
var iter = c.gen();
iter.next().then(() => {}).catch(rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
});