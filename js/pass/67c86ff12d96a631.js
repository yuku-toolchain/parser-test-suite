function thrower() {}
var obj = {
  async *method({x: y = thrower()}) {}
};