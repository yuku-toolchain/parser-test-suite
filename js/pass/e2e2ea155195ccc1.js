var data = "data";
var obj = {};
Object.defineProperties(obj, {
  "prop": {
    set: function (value) {
      data = value;
    }
  }
});
obj.prop = "overrideData";