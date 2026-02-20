var dateObj = new Date(0);
dateObj.writable = true;
var newObj = Object.create({}, {
  prop: dateObj
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";