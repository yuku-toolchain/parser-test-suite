var poisonedProperty = Object.defineProperty({}, 'poisoned', {
  get: function () {}
});
var f;
f = async function* ({poisoned}) {};