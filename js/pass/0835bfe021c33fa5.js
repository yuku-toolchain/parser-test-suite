function MyFunction() {}
MyFunction.prop = 1;
delete MyFunction.prop;
if (MyFunction.prop !== undefined) {}