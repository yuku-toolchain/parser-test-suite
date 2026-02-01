const tests = [[true, "true", Boolean.prototype], [1, "1", Number.prototype], [1n, "1", BigInt.prototype]];
for (const [v, expected, proto] of tests) {
  proto.toString = function () {};
  let result = String.prototype.toWellFormed.call(v);
  delete proto.toString;
}
Symbol.prototype.toString = function () {
  throw new TypeError("should not call toString on the prototype for Symbol");
};