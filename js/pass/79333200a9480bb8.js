var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var obj = {
  method({poisoned} = poisonedProperty) {}
};