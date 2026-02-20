var callCount1 = 0;
var coercibleKey1 = {
  get toString() {
    callCount1++;
  },
  get valueOf() {
    callCount1++;
  }
};
var callCount2 = 0;
var coercibleKey2 = {};
coercibleKey2[Symbol.toPrimitive] = function () {
  callCount2++;
};