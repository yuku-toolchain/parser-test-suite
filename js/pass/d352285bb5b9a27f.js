function MyFunction() {}
var MyObject = new MyFunction();
MyObject.prop = 1;
if (delete MyObject.prop !== true) {}