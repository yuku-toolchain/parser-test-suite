{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('if (true) function f() { return "second declaration"; } else function _f() {}');