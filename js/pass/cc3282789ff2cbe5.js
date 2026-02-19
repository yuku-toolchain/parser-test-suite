var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  static *method({poisoned} = poisonedProperty) {}
}