var array = [1, 2, 3];
array.writable = true;
var newObj = Object.create({}, {
  prop: array
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";