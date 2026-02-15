var sym = Symbol();
var obj = {};
obj[sym] = 1;
var syms = Object.getOwnPropertySymbols(obj);