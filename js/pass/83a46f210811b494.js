var invalidIterables = [Object.create(null), Object.create(null, {
  next: {
    value: function () {}
  },
  return: {
    value: function () {}
  }
})];
for (var iterables of invalidIterables) {}