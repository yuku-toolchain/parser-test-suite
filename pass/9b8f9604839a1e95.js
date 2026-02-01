var o = {};
var desc = {
  value: 1,
  configurable: false
};
Object.defineProperty(o, 'foo', desc);
var d = delete o.foo;