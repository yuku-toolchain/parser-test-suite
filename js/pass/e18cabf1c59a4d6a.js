let error = new Error();
let iterable = [Promise.reject(error), "unreachable"];
var callCount = 0;
class C {
  static async *#gen() {
    callCount += 1;
    yield* iterable;
  }
  static get gen() {
    return this.#gen;
  }
}
var iter = C.gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);