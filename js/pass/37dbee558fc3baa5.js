var __string = new String('this is a string object');
if (__string.substring(NaN, Infinity) !== "this is a string object") {}