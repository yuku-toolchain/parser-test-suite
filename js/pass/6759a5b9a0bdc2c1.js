var __evaluated;
var __condition = 0;
__evaluated = eval("do eval(\"__condition++\"); while (__condition<5)");
if (__condition !== 5) {}
if (__evaluated !== 4) {}