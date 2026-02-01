var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f;
f = async function* h({poisoned: x = ++initEvalCount} = poisonedProperty) {};