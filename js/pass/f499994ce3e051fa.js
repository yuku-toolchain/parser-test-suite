var hint = JSON.parse({
  toString: function () {
    return '"string"';
  },
  valueOf: function () {
    return '"default_or_number"';
  }
});