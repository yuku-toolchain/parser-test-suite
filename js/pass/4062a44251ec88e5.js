(function () {
  try {
    throw {};
  } catch ({f}) {
    switch (1) {
      default:
        function f() {}
    }
  }
})();