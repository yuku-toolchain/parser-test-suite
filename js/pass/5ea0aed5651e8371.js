var toStringCalls = 0;
var throwyToString = {
  toString: function () {
    toStringCalls += 1;
  }
};
var optionAccesses = 0;
var touchyOptions = {};
Object.defineProperty(touchyOptions, "alphabet", {
  get: function () {
    optionAccesses += 1;
  }
});
Object.defineProperty(touchyOptions, "lastChunkHandling", {
  get: function () {
    optionAccesses += 1;
  }
});