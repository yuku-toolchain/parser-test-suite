var obj = {};
var setter = function () {};
Object.defineProperties(obj, {
  property: {
    set: setter
  }
});