var initialBV, currentBV;
switch (1) {
  case 1:
    function f() {
      initialBV = f;
      f = 123;
      currentBV = f;
      return 'decl';
    }
}
f();