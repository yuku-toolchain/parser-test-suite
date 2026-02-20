var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  *method({poisoned} = poisonedProperty) {}
};
var c = new C();