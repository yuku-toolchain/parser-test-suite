var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: this
  }
});
obj.property = "isWritable";