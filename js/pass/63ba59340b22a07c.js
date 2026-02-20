var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  static async *method({poisoned} = poisonedProperty) {}
}
var method = C.method;