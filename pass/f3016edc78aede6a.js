var array = [];
var iterator = array.keys();
var result;
array.push('a');
result = iterator.next();
result = iterator.next();
array.push('b');
result = iterator.next();