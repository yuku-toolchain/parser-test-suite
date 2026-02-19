let error = new Error();
async function* readFile() {
  yield Promise.reject(error);
  yield "unreachable";
}
var callCount = 0;
class C {
  async *#gen() {
    callCount += 1;
    for await (let line of readFile()) {
      yield line;
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