var newObj = Object.create({}, {
  prop: {
    writable: true
  }
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";