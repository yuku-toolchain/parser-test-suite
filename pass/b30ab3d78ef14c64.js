delete Array.prototype[Symbol.iterator];
var obj = {
  async *method([x, y, z]) {}
};