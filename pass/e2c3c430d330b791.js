var toStringCalled = false;
Number.prototype.toString = function () {
  toStringCalled = true;
};