function thrower() {}
var C = class {
  static *method({[thrower()]: x}) {}
};