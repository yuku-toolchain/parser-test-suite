var poisonedThen = Object.defineProperty(new Promise(function () {}), 'then', {
  get: function () {}
});