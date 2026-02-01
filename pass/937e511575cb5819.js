class ReturnCalledError extends Error {}
class DoneGetterError extends Error {}
class ThrowingIterator extends Iterator {
  next() {
    return {
      get done() {
        throw new DoneGetterError();
      },
      value: 1
    };
  }
  return() {
    throw new ReturnCalledError();
  }
}
let iterator = new ThrowingIterator().take(0);
iterator = new ThrowingIterator().take(1);