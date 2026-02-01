var regexp = /\w/g;
var str = 'a*b';
var iter = regexp[Symbol.matchAll](str);
var result = iter.next();