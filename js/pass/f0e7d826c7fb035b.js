var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f = ({poisoned} = poisonedProperty) => {};