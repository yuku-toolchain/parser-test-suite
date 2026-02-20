function thrower() {}
var obj = {
  method({[thrower()]: x} = {}) {}
};