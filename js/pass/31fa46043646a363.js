function thrower() {}
var obj = {
  async *method({[thrower()]: x}) {}
};