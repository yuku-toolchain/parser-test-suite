var lastIndexValue;
var lastIndexValueAfterExec;
var lastIndexReads;
var lastIndexWrites;
var execCallCount;
var result;
var fakeRe = {
  get lastIndex() {
    lastIndexReads++;
    return lastIndexValue;
  },
  set lastIndex(_) {
    lastIndexWrites++;
    lastIndexValue = _;
  },
  exec: function () {
    execCallCount++;
    lastIndexValue = lastIndexValueAfterExec;
    return null;
  }
};
function reset(value, valueAfterExec) {
  lastIndexValue = value;
  lastIndexValueAfterExec = valueAfterExec;
  lastIndexReads = 0;
  lastIndexWrites = 0;
  execCallCount = 0;
}
reset(0, 0);
result = RegExp.prototype[Symbol.search].call(fakeRe);
reset(420, 420);
result = RegExp.prototype[Symbol.search].call(fakeRe);