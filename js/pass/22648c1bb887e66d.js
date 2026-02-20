function ExpectedError(message) {
  this.message = message || "";
}
ExpectedError.prototype.toString = function () {
  return "ExpectedError: " + this.message;
};
var nonStringableSeparator = {};
nonStringableSeparator[Symbol.toPrimitive] = function () {};
nonStringableSeparator.toString = function () {};
nonStringableSeparator.valueOf = function () {};
var nonNumberableLimit = {};
nonNumberableLimit[Symbol.toPrimitive] = function () {
  throw new ExpectedError();
};