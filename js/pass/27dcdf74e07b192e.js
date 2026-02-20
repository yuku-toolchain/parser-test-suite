var poisonedSearch = {};
Object.defineProperty(poisonedSearch, Symbol.search, {
  get: function () {}
});