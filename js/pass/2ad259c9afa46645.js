let error = new Error();
var callCount = 0;
var gen = async function* g() {
  callCount += 1;
  yield Promise.reject(error);
  yield "unreachable";
};
var iter = gen();
iter.next().then(() => {}).catch(rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
});