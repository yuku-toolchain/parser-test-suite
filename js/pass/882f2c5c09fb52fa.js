var object = {
  1: true
};
if (typeof object !== "object") {}
if (object instanceof Object !== true) {}
if (object.toString !== Object.prototype.toString) {}
if (object[1] !== true) {}
if (object["1"] !== true) {}