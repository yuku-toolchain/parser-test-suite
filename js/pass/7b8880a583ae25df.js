const argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, 'arguments');
var throwTypeError;
WellKnownIntrinsicObjects.forEach(function (record) {
  if (record.name === "%ThrowTypeError%") {
    throwTypeError = record.value;
  }
});
if (throwTypeError) {}