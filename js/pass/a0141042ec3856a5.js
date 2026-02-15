var initEvalCount = 0;
var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  async *method({poisoned: x = ++initEvalCount} = poisonedProperty) {}
};
var method = C.prototype.method;