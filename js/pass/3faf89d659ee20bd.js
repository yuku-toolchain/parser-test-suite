var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
class C {
  method({poisoned} = poisonedProperty) {}
}
var c = new C();