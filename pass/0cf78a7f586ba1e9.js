var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
function f() {
  using _ = resource;
}
f();