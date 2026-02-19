var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var obj = {
  async *method({poisoned: x = ++initEvalCount}) {}
};