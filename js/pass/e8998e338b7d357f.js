var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: true
  }
});
obj.property = "isWritable";