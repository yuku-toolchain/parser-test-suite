var arr = [];
var obj1 = {
  length: 10
};
Object.defineProperty(arr, "0", {
  value: obj1
});
var properties = {
  "0": {
    value: obj1
  }
};
Object.defineProperties(arr, properties);