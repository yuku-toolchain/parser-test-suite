var string = "abc";
var iterator = string[Symbol.iterator]();
var result;
result = iterator.next();
result = iterator.next();
result = iterator.next();
result = iterator.next();
result = iterator.next();