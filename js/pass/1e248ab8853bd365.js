var base = {
  get foo() {
    return 42;
  },
  set foo(x) {}
};
var o = Object.create(base);