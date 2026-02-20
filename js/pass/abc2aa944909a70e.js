var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  static method({poisoned} = poisonedProperty) {}
};