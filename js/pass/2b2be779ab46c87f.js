const values = [true, false, null, 42.42, -42.42, NaN, Infinity, Symbol("foo"), "bar", "42", /baz/, 42n, {}, [], function () {}, {
  valueOf() {
    return 42;
  }
}];
for (const v of values) {}