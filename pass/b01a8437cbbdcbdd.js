var obj = {};
var getter = function () {
  return "ownDataProperty";
};
Object.defineProperties(obj, {
  property: {
    get: getter
  }
});