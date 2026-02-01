var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: JSON
  }
});
obj.property = "isWritable";