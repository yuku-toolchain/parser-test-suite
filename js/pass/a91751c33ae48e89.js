(function () {
  try {
    throw null;
  } catch (f) {
    switch (1) {
      case 1:
        function f() {
          return 123;
        }
    }
  }
})();