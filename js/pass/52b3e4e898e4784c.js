var obj = {};
Object.defineProperty(obj, "nonEnumerableProp", {
  value: 10,
  enumerable: false,
  configurable: true
});
var result = Object.getOwnPropertyNames(obj);