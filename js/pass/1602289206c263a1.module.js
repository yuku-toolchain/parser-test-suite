var symA = Symbol("A");
var symB = Symbol("B");
var symC = Symbol("C");
var obj = {};
obj[symA] = 1;
Object.preventExtensions(obj);
obj[symA] = 2;