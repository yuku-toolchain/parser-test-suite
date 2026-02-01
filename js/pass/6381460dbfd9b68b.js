var rest;
var obj = {};
Object.defineProperty(obj, "a", {
  value: 3,
  configurable: false,
  enumerable: true
});
Object.defineProperty(obj, "b", {
  value: 4,
  writable: false,
  enumerable: true
});
var result;
var vals = obj;
result = {...rest} = vals;