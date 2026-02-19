var C = class {
  async *method({w: {x, y, z} = undefined}) {}
};
var method = C.prototype.method;