class Ar extends Array {}
var arr = new Ar('foo', 'bar');
var arrDesc = Object.getOwnPropertyDescriptor(arr, 'length');
arr.length = 1;