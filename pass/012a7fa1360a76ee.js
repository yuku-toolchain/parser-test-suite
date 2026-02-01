var obj = new Object();
obj.x = 1;
obj.y = 2;
var result = Object.getOwnPropertyNames(obj);
var desc = Object.getOwnPropertyDescriptor(result, "0");