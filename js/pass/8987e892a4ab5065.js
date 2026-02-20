var object = {
  prop: true
};
if (typeof object !== "object") {}
if (object instanceof Object !== true) {}
if (object.toString !== Object.prototype.toString) {}
if (object["prop"] !== true) {}
if (object.prop !== true) {}