class ReturnCalledError extends Error {}
class ValueGetterError extends Error {}
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: true,
      get value() {
        throw new ValueGetterError();
      }
    };
  }
  return() {
    throw new ReturnCalledError();
  }
}
let iterator = new ThrowingIterator().take(0);
iterator = new ThrowingIterator().take(1);
iterator.next();