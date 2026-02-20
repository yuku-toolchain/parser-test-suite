var obj = {};
var arr = [1, 2, 3];
arr.value = "Array";
Object.defineProperties(obj, {
  property: arr
});