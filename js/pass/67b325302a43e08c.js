var __evaluated;
var __condition = 0, __odds = 0;
__evaluated = eval("while(__condition < 10) { __condition++; if (((''+__condition/2).split('.')).length>1) continue; __odds++;}");
if (__odds !== 5) {}
if (__evaluated !== 4) {}