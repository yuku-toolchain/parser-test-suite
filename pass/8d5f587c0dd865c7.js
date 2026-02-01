var array = new Int16Array([3, 1, 2]);
var iterator = array[Symbol.iterator]();
var result;
result = iterator.next();
result = iterator.next();
result = iterator.next();
result = iterator.next();
result = iterator.next();