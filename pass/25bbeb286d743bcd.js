var getCallCount = 0, setCallCount = 0;
var lengthValue;
var obj = {
  get length() {
    getCallCount += 1;
    return "0";
  },
  set length(v) {
    setCallCount += 1;
    lengthValue = v;
  }
};
Array.prototype.splice.call(obj);