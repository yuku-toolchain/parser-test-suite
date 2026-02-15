var obj = {};
obj.a = 1;
obj.b = 2;
Object.defineProperty(obj, "a", {
  writable: false
});
var objKeys = Object.entries(obj).map(e => e[0]);