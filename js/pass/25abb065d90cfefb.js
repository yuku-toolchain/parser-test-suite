let error = new Error();
async function* readFile() {
  yield Promise.reject(error);
  yield "unreachable";
}
var callCount = 0;
var C = class {
  static async *gen() {
    callCount += 1;
    for await (let line of readFile()) {
      yield line;
    }
  }
};
var gen = C.gen;
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);