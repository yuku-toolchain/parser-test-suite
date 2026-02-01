let error = new Error();
let iterable = [Promise.reject(error), "unreachable"];
var callCount = 0;
var gen = ({
  async *method() {
    callCount += 1;
    yield* iterable;
  }
}).method;
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);