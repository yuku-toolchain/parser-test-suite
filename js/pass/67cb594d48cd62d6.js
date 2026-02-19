var obj = new Object();
var objRef = obj;
objRef.oneProperty = -1;
obj.oneProperty = true;
if (objRef.oneProperty !== true) {}