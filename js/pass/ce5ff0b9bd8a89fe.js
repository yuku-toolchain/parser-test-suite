var executor = null;
var callCount = 0;
class SubPromise extends Promise {
  constructor(a) {
    super(a);
    executor = a;
    callCount += 1;
  }
}
var instance = Promise.reject.call(SubPromise);