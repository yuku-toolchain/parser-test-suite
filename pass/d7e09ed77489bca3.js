{
  function f() {
    return 'first declaration';
  }
}
eval('if (false) ; else function f() { return "second declaration"; }');