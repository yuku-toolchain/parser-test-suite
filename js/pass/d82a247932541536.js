var array = [3];
if (typeof array !== "object") {}
if (array instanceof Array !== true) {}
if (array.toString !== Array.prototype.toString) {}
if (array.length !== 5) {}
if (array[0] !== undefined) {}
if (array[1] !== undefined) {}
if (array[2] !== 3) {}
if (array[3] !== undefined) {}
if (array[4] !== undefined) {}