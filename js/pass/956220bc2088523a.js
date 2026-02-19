var invalidValues = [undefined, null, false, "5", Symbol(), 5, -1234567.89, NaN, -Infinity, {
  valueOf: function () {
    return 5;
  }
}, {
  valueOf: function () {
    return 5n;
  }
}];
for (const value of invalidValues) {}