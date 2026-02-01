var case1 = new AggregateError([], 42);
var case2 = new AggregateError([], false);
var case3 = new AggregateError([], true);
var case4 = new AggregateError([], {
  toString() {
    return 'string';
  }
});
var case5 = new AggregateError([], null);