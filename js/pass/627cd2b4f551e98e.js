Math.writable = true;
var newObj = Object.create({}, {
  prop: Math
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";