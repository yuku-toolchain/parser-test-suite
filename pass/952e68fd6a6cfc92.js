var array = [];
var iterator = array[Symbol.iterator]();
var result;
array.push('a');
result = iterator.next();
result = iterator.next();
array.push('b');
result = iterator.next();