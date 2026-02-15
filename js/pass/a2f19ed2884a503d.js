function getCleanObj() {
  var obj = {};
  Object.defineProperty(obj, "length", {
    get: function () {
      Object.defineProperty(obj, "0", {
        get: function () {
          obj[1] = "ecma262";
          obj[2] = "cake";
          return "tc39";
        }
      });
      return 2;
    }
  });
  return obj;
}
var obj;
obj = getCleanObj();
obj = getCleanObj();
obj = getCleanObj();