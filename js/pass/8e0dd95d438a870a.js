var base = {
  get foo() {
    return 42;
  }
};
var o = Object.create(base);