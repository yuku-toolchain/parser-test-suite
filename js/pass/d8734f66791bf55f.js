var array = [1, 2];
var valueOfCalls = 0;
var length = {
  valueOf: function () {
    valueOfCalls += 1;
    if (valueOfCalls !== 1) {
      Object.defineProperty(array, "length", {
        writable: false
      });
    }
    return array.length;
  }
};
array = [1, 2];
valueOfCalls = 0;