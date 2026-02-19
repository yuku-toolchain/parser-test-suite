var o = {};
var desc = {
  value: 1,
  configurable: true
};
Object.defineProperty(o, 'foo', desc);
var d = delete o.foo;