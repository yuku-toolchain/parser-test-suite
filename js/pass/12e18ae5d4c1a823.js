var array = [1, 2, 3, 4, 5];
if (typeof array !== "object") {}
if (array instanceof Array !== true) {}
if (array.toString !== Array.prototype.toString) {}
if (array.length !== 5) {}
if (array[0] !== 1) {}
if (array[1] !== 2) {}
if (array[2] !== 3) {}
if (array[3] !== 4) {}
if (array[4] !== 5) {}