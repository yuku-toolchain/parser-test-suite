var __string = new String('this is a string object');
if (__string.slice(NaN, Infinity) !== "this is a string object") {}