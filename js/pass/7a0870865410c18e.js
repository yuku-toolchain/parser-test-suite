this.get = function () {
  return "VerifyGlobalObject";
};
var newObj = Object.create({}, {
  prop: this
});