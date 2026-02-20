var array = [4, 5];
if (typeof array !== "object") {}
if (array instanceof Array !== true) {}
if (array.toString !== Array.prototype.toString) {}
if (array.length !== 5) {}
if (array[0] !== 4) {}
if (array[1] !== 5) {}
if (array[2] !== undefined) {}
if (array[3] !== undefined) {}
if (array[4] !== undefined) {}