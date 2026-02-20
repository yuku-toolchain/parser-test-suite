var proto = {
  method(x) {
    return 'proto' + x;
  }
};
var object = {
  method(x) {
    return super.method(x);
  }
};
Object.setPrototypeOf(object, proto);