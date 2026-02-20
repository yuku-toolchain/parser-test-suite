var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: -123
  }
});
obj.property = "isWritable";