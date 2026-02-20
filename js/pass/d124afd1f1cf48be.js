var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f = async function* ({poisoned} = poisonedProperty) {};