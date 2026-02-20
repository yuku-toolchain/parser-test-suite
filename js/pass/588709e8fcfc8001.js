let called = 0;
const options = new Proxy({}, {
  get() {
    ++called;
  }
});
const d = new Temporal.Duration(1, 2);