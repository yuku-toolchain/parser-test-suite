const callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, 'caller');
var throwTypeError;
WellKnownIntrinsicObjects.forEach(function (record) {
  if (record.name === "%ThrowTypeError%") {
    throwTypeError = record.value;
  }
});
if (throwTypeError) {}