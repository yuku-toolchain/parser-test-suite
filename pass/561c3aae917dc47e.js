var __evaluated;
var __condition = 0, __odds = 0;
__evaluated = eval("do { __condition++; if (((''+__condition/2).split('.')).length>1) continue; __odds++;} while(__condition < 10)");
if (__odds !== 5) {}
if (__evaluated !== 4) {}