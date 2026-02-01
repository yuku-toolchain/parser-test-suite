var array = [];
var iterator = array.entries();
var result;
array.push('a');
result = iterator.next();
result = iterator.next();
array.push('b');
result = iterator.next();