var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  async *method({poisoned} = poisonedProperty) {}
}
var method = C.prototype.method;