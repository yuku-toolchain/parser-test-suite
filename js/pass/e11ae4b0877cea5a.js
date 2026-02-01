var count = 0;
class FooPromise extends Promise {
  constructor(resolve, reject) {
    count++;
    return super(resolve, reject);
  }
}
FooPromise.reject().finally(() => {}).then(value => {}, () => {}).then($DONE, $DONE);