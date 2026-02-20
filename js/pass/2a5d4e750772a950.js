var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  async *method({poisoned} = poisonedProperty) {}
};
var method = C.prototype.method;