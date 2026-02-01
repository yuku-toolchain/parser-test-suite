class FooPromise extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}
var p = Promise.resolve().finally(() => FooPromise.resolve());