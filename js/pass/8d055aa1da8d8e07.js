var getOwnPropertyKeys = [];
var definePropertyKeys = [];
var p = new Proxy({
  "0": null
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
p[0] = true;
p[0] = true;
p["0"] = true;
getOwnPropertyKeys = [];
definePropertyKeys = [];
p[22] = false;
p["22"] = false;
p[22] = false;