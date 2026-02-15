var count = 0;
class FooPromise extends Promise {
  constructor(resolve, reject) {
    count++;
    return super(resolve, reject);
  }
}
new FooPromise(r => r()).finally(() => {}).then(() => {}).then($DONE, $DONE);