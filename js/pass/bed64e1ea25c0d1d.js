var data = "data";
var obj = {};
Object.defineProperties(obj, {
  descObj: {
    get: function () {
      return data;
    }
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "descObj");