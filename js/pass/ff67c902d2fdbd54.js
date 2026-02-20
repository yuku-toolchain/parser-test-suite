let error = new Error();
var callCount = 0;
class C {
  static async *#gen() {
    callCount += 1;
    yield Promise.reject(error);
    yield "unreachable";
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next().then(() => {}).catch(rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
});