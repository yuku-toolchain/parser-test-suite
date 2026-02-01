var obj = {};
Math.get = function () {
  return "Math";
};
Object.defineProperties(obj, {
  property: Math
});