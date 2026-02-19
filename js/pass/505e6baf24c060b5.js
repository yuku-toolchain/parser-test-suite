function MyFunction() {}
var MyObjectVar = new MyFunction();
MyObjectVar.prop = 1;
delete MyObjectVar.prop;
if (MyObjectVar.prop !== undefined) {}