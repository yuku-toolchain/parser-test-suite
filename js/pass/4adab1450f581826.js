var obj = {};
Object.defineProperties(obj, {
  property: {
    writable: "abc"
  }
});
obj.property = "isWritable";