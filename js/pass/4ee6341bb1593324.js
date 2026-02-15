var object = {};
if (typeof object !== "object") {}
if (object instanceof Object !== true) {}
if (object.toString !== Object.prototype.toString) {}
if (object.toString() !== "[object Object]") {}