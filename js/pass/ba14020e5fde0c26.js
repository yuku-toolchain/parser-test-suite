var symA = Symbol("A");
var symB = Symbol("B");
var obj = {};
obj[symA] = 1;
Object.seal(obj);
obj[symA] = 2;
obj[symB] = 1;