(function () {
  try {
    throw null;
  } catch (f) {
    switch (1) {
      default:
        function f() {
          return 123;
        }
    }
  }
})();