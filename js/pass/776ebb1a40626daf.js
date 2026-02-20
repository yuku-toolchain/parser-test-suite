var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f = function* ({poisoned} = poisonedProperty) {};