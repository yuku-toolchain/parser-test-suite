function thrower() {}
var obj = {
  async *method({x = thrower()} = {}) {}
};