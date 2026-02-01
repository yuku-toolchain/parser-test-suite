var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  *method({poisoned}) {}
}
var c = new C();