var proto = {
  method() {
    return 42;
  }
};
var object = {
  *g() {
    yield super.method();
  }
};
Object.setPrototypeOf(object, proto);