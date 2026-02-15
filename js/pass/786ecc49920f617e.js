var array = [[1, 2], [3], []];
if (typeof array !== "object") {}
if (array instanceof Array !== true) {}
if (array.toString !== Array.prototype.toString) {}
if (array.length !== 3) {}
var subarray = array[0];
if (typeof subarray !== "object") {}
if (subarray instanceof Array !== true) {}
if (subarray.toString !== Array.prototype.toString) {}
if (subarray.length !== 2) {}
if (subarray[0] !== 1) {}
if (subarray[1] !== 2) {}
var subarray = array[1];
if (typeof subarray !== "object") {}
if (subarray instanceof Array !== true) {}
if (subarray.toString !== Array.prototype.toString) {}
if (subarray.length !== 1) {}
if (subarray[0] !== 3) {}
var subarray = array[2];
if (typeof subarray !== "object") {}
if (subarray instanceof Array !== true) {}
if (subarray.toString !== Array.prototype.toString) {}
if (subarray.length !== 0) {}
if (array[0][0] !== 1) {}
if (array[0][1] !== 2) {}
if (array[1][0] !== 3) {}