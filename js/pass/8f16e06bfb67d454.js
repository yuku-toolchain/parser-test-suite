var regObj = new RegExp();
regObj.writable = true;
var newObj = Object.create({}, {
  prop: regObj
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";