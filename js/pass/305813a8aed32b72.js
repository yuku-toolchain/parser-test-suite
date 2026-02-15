let error = new Error();
let iterable = [Promise.reject(error), "unreachable"];
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    for await (let value of iterable) {
      yield value;
    }
  }
  get gen() {
    return this.#gen;
  }
}
const c = new C();
var iter = c.gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);