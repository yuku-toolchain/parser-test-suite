var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
async function* f({poisoned}) {}