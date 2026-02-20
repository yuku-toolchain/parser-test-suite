function MyFunction() {}
MyObjectNotVar = new MyFunction();
MyObjectNotVar.prop = 1;
delete MyObjectNotVar.prop;
if (MyObjectNotVar.prop !== undefined) {}