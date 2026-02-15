var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: Math
  }
});
obj.property = "isWritable";