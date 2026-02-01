var str = new String("abc");
str.writable = true;
var newObj = Object.create({}, {
  prop: str
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";