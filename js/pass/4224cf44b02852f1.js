var case1 = new SuppressedError(undefined, undefined, 42);
var case2 = new SuppressedError(undefined, undefined, false);
var case3 = new SuppressedError(undefined, undefined, true);
var case4 = new SuppressedError(undefined, undefined, {
  toString() {
    return 'string';
  }
});
var case5 = new SuppressedError(undefined, undefined, null);