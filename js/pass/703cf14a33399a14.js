var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function* f({poisoned: x = ++initEvalCount} = poisonedProperty) {}