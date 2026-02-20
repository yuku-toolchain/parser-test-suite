var poisonedObject = {};
var poisonedDate = new Date();
Object.defineProperty(poisonedObject, Symbol.toPrimitive, {
  get: function () {}
});
Object.defineProperty(poisonedDate, Symbol.toPrimitive, {
  get: function () {}
});
Date(poisonedObject);
new Date(poisonedDate);