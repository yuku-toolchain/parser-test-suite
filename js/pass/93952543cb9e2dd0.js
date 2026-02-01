var obj = {};
function get_func() {
  return 10;
}
function set_func(value) {
  obj.setVerifyHelpProp = value;
}
var properties = {
  foo1: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true
  },
  foo2: {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
  }
};
Object.defineProperties(obj, properties);