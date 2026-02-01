function ExpectedError(message) {
  this.message = message || "";
}
ExpectedError.prototype.toString = function () {
  return "ExpectedError: " + this.message;
};
var nonStringableSeparator = {};
nonStringableSeparator.toString = function () {
  throw new ExpectedError();
};