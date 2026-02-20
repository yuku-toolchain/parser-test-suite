var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  *method({poisoned: x = ++initEvalCount} = poisonedProperty) {}
};
var c = new C();