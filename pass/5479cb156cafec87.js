{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('if (false) function _f() {} else function f() { return "second declaration"; }');