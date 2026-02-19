var array = ['a', 'b', 'c'];
var iterator = array[Symbol.iterator]();
var result;
result = iterator.next();
result = iterator.next();
result = iterator.next();
result = iterator.next();