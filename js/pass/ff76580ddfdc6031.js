var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  async *method({poisoned: x = ++initEvalCount} = poisonedProperty) {}
}
var method = C.prototype.method;