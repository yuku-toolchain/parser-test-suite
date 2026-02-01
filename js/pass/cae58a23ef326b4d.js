var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  static async *method({poisoned}) {}
}
var method = C.method;