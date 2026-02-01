var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
function* f({poisoned} = poisonedProperty) {}