{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('{ function f() { return "second declaration"; } }');