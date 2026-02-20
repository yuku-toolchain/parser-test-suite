function MyFunction() {}
var MyObject = new MyFunction();
if (delete MyObject.prop !== true) {}
var MyObject = new Object();
if (delete MyObject.prop !== true) {}