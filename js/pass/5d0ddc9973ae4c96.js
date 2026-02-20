let error = new Error();
var callCount = 0;
var gen = ({
  async *method() {
    callCount += 1;
    yield Promise.reject(error);
    yield "unreachable";
  }
}).method;
var iter = gen();
iter.next().then(() => {}, rejectValue => {
  iter.next().then(({done, value}) => {}).then($DONE, $DONE);
}).catch($DONE);