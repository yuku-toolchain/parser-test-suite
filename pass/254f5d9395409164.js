var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  method({poisoned: x = ++initEvalCount} = poisonedProperty) {}
}
var c = new C();