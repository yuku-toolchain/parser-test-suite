{
  function f() {
    return 'first declaration';
  }
}
eval('if (true) function f() { return "second declaration"; } else function _f() {}');