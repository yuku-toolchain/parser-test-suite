var obj = {};
var getter = function () {
  return "present";
};
Object.defineProperties(obj, {
  property: {
    get: getter
  }
});