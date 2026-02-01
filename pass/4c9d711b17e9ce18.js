var obj = {};
var obj1 = {
  length: 10
};
obj.foo = obj1;
var obj2 = {
  length: 20
};
Object.defineProperty(obj, "foo", {
  value: obj2
});