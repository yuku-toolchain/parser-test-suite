{
  function f() {
    return 'first declaration';
  }
}
eval('{ function f() { return "second declaration"; } }');