function thrower() {}
var C = class {
  *method({[thrower()]: x}) {}
};
var c = new C();