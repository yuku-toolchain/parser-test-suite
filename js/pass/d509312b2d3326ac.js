var obj = {};
var arr = [1, 2, 3];
arr.writable = false;
Object.defineProperties(obj, {
  property: arr
});