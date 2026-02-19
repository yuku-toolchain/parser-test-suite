var rest;
var obj = {
  a: 3,
  b: 4
};
Object.defineProperty(obj, "x", {
  value: 4,
  enumerable: false
});
var result;
var vals = obj;
result = {...rest} = vals;