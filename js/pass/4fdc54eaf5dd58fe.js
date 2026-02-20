(function () {
  try {
    throw {};
  } catch ({f}) {
    switch (1) {
      case 1:
        function f() {}
    }
  }
})();