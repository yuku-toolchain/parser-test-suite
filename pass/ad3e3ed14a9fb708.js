var getOwnPropertyKeys = [];
var definePropertyKeys = [];
var p = new Proxy({
  foo: 1
}, {
  getOwnPropertyDescriptor: function (target, key) {
    getOwnPropertyKeys.push(key);
    return Reflect.getOwnPropertyDescriptor(target, key);
  },
  defineProperty: function (target, key, desc) {
    definePropertyKeys.push(key);
    return Reflect.defineProperty(target, key, desc);
  }
});
p["foo"] = 2;
p.foo = 2;
p.foo = 2;
getOwnPropertyKeys = [];
definePropertyKeys = [];
p.bar = 3;
p["bar"] = 3;
p.bar = 3;