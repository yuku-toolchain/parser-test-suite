var C = class {
  async *method([x = (function () {})()]) {}
};
var method = C.prototype.method;