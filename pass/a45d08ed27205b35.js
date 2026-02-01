function thrower() {}
var C = class {
  static async *method({[thrower()]: x} = {}) {}
};
var method = C.method;