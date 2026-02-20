var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var obj = {
  async *method({poisoned}) {}
};