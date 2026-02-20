var obj = {};
this.get = function () {
  return "global";
};
Object.defineProperties(obj, {
  property: this
});