(function () {
  try {
    throw null;
  } catch (f) {
    {
      function f() {
        return 123;
      }
    }
  }
})();