delete Array.prototype[Symbol.iterator];
var f = ([x, y, z] = [1, 2, 3]) => {};