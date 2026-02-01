var initialBV, currentBV;
{
  function f() {
    initialBV = f;
    f = 123;
    currentBV = f;
    return 'decl';
  }
}
f();