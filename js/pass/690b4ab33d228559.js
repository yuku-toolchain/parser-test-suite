var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f = ({poisoned: x = ++initEvalCount} = poisonedProperty) => {};