var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  static async *method({poisoned} = poisonedProperty) {}
};
var method = C.method;