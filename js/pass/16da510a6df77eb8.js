var numObj = new Number(123);
numObj.writable = true;
var newObj = Object.create({}, {
  prop: numObj
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";