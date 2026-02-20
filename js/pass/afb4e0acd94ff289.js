var array = [];
var iterator = array.values();
var result;
array.push('a');
result = iterator.next();
result = iterator.next();
array.push('b');
result = iterator.next();