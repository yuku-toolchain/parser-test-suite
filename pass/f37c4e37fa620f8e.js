(function () {
  try {
    throw null;
  } catch (f) {
    if (true) function f() {
      return 123;
    }
  }
})();