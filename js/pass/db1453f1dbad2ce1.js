var arr = [];
var obj1 = {
  value: 12
};
var obj2 = {
  value: 36
};
Object.defineProperty(arr, "1", {
  value: obj1
});
try {
  Object.defineProperties(arr, {
    "1": {
      value: obj2
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}