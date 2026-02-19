var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: function () {}
  }
});
obj.property = "isWritable";