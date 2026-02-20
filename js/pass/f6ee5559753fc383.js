var object = {
  "x": true
};
if (typeof object !== "object") {}
if (object instanceof Object !== true) {}
if (object.toString !== Object.prototype.toString) {}
if (object["x"] !== true) {}
if (object.x !== true) {}