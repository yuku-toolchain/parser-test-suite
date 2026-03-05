var unscopablesCalled = 0;
var env = {
  binding: 0,
  get [Symbol.unscopables]() {
    unscopablesCalled++;
    delete env.binding;
    return null;
  }
};
var result = null;
with (env) {
  result = binding;
}