let error = new Error();
async function* readFile() {
  yield Promise.reject(error);
  yield "unreachable";
}
var callCount = 0;
var gen = async function* g() {
  callCount += 1;
  yield* readFile();
};
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}, $DONE).catch($DONE);