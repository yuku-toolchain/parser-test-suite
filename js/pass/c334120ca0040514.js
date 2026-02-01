var obj = {};
this.writable = true;
Object.defineProperty(obj, "property", this);
var beforeWrite = obj.hasOwnProperty("property");
obj.property = "isWritable";
var afterWrite = obj.property === "isWritable";