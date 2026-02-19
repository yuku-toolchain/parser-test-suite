{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('if (false) ; else function f() { return "second declaration"; }');