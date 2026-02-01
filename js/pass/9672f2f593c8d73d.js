var array = [1, 2];
if (typeof array !== "object") {}
if (array instanceof Array !== true) {}
if (array.toString !== Array.prototype.toString) {}
if (array.length !== 5) {}
if (array[0] !== undefined) {}
if (array[1] !== undefined) {}
if (array[2] !== undefined) {}
if (array[3] !== 1) {}
if (array[4] !== 2) {}