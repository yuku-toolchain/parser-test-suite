var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  async *method({poisoned}) {}
};
var method = C.prototype.method;