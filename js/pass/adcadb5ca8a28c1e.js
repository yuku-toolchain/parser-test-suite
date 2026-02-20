let error = new Error();
let iterable = [Promise.reject(error), "unreachable"];
var callCount = 0;
var gen = async function* () {
  callCount += 1;
  for await (let value of iterable) {
    yield value;
  }
};
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);