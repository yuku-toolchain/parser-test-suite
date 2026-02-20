var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var obj = {
  *method({poisoned: x = ++initEvalCount} = poisonedProperty) {}
};