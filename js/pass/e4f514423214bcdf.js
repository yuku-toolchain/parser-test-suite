var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  async *method({poisoned}) {}
}
var method = C.prototype.method;