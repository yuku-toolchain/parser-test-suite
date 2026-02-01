["constructor", "length", "0", Symbol.isConcatSpreadable, Symbol.species].forEach(function (key) {
  Object.defineProperty(this, key, {
    get: function () {}
  });
}, this);
function callback() {}
var index = {
  get valueOf() {}
};
var separator = {
  get toString() {}
};
var concat = Array.prototype.concat;
var copyWithin = Array.prototype.copyWithin;
var entries = Array.prototype.entries;
var every = Array.prototype.every;
var fill = Array.prototype.fill;
var filter = Array.prototype.filter;
var find = Array.prototype.find;
var findIndex = Array.prototype.findIndex;
var flat = Array.prototype.flat;
var flatMap = Array.prototype.flatMap;
var forEach = Array.prototype.forEach;
var includes = Array.prototype.includes;
var indexOf = Array.prototype.indexOf;
var join = Array.prototype.join;
var keys = Array.prototype.keys;
var lastIndexOf = Array.prototype.lastIndexOf;
var map = Array.prototype.map;
var pop = Array.prototype.pop;
var push = Array.prototype.push;
var reduce = Array.prototype.reduce;
var reduceRight = Array.prototype.reduceRight;
var reverse = Array.prototype.reverse;
var shift = Array.prototype.shift;
var slice = Array.prototype.slice;
var some = Array.prototype.some;
var sort = Array.prototype.sort;
var splice = Array.prototype.splice;
var toLocaleString = Array.prototype.toLocaleString;
var toString = Array.prototype.toString;
var unshift = Array.prototype.unshift;
var values = Array.prototype.values;
var iterator = Array.prototype[Symbol.iterator];