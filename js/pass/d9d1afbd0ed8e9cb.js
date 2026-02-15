var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0;
var __obj = {
  async method(aFalse = falseCount += 1, aString = stringCount += 1, aNaN = nanCount += 1, a0 = zeroCount += 1, aNull = nullCount += 1, aObj = objCount += 1) {
    callCount = callCount + 1;
  }
};
var ref = __obj.method;
ref(false, '', NaN, 0, null, obj).then(() => {}).then($DONE, $DONE);