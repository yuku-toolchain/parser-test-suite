var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var C = class {
  static async *method({poisoned}) {}
};
var method = C.method;