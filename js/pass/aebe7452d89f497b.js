Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var arr = x.slice();
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr.hasOwnProperty('1') !== true) {}