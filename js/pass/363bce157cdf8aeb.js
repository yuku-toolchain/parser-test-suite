function ExpectedError(message) {
  this.message = message || "";
}
ExpectedError.prototype.toString = function () {
  return "ExpectedError: " + this.message;
};
var split = String.prototype.split;
var nonStringableReceiver = {};
nonStringableReceiver.toString = function () {
  throw new ExpectedError("receiver.toString");
};
var splitter = {};
splitter[Symbol.split] = function () {};
try {
  split.call(nonStringableReceiver, splitter, Symbol());
} catch (e) {}
var nonStringableSeparator = {};
nonStringableSeparator[Symbol.toPrimitive] = function () {};
nonStringableSeparator.toString = function () {};
nonStringableSeparator.valueOf = function () {};