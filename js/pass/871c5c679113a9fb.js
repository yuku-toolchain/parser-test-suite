const tests = [[true, Boolean.prototype], [1, Number.prototype], [1n, BigInt.prototype]];
for (const [v, proto] of tests) {
  proto.toString = function () {};
  let result = String.prototype.isWellFormed.call(v);
  delete proto.toString;
}
Symbol.prototype.toString = function () {
  throw new TypeError("should not call toString on the prototype for Symbol");
};