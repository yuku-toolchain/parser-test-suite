var obj = {};
obj[Symbol.toPrimitive] = 42;
obj[Symbol.toPrimitive] = "";
obj[Symbol.toPrimitive] = true;
obj[Symbol.toPrimitive] = Symbol.toPrimitive;
obj[Symbol.toPrimitive] = {};