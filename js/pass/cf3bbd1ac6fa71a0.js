var __evaluated;
var __condition = 0;
__evaluated = eval("while (__condition<5) eval(\"__condition++\");");
if (__condition !== 5) {}
if (__evaluated !== 4) {}