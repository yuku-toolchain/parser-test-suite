var data = "data";
var obj = {};
Object.defineProperties(obj, {
  descObj: {
    set: function (value) {
      data = value;
    }
  }
});
obj.descObj = "overrideData";