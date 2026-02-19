var sym = Symbol();
var obj = {};
obj[sym] = 1;
Object.freeze(obj);
obj[sym] = 2;