var obj = {};
function get_func() {
  return 20;
}
function set_func() {}
var properties = {
  a: {
    value: 100,
    enumerable: true,
    writable: true,
    configurable: true
  },
  b: {
    get: get_func,
    set: set_func,
    enumerable: true,
    configurable: true
  },
  c: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true
  }
};
Object.defineProperties(obj, properties);