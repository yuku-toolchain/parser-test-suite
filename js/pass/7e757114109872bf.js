var toPrimitiveAccessed = 0;
var toStringAccessed = 0;
var valueOfAccessed = 0;
var thisVal = {
  get [Symbol.toPrimitive]() {
    toPrimitiveAccessed += 1;
    return undefined;
  },
  get toString() {
    toStringAccessed += 1;
    return undefined;
  },
  get valueOf() {
    valueOfAccessed += 1;
    return function () {
      return '42 ';
    };
  }
};
var result = String.prototype.trimEnd.call(thisVal);