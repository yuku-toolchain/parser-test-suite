{
  function f() {
    return 'first declaration';
  }
}
eval('if (false) function _f() {} else function f() { return "second declaration"; }');