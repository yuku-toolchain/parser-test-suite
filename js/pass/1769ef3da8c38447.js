{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('switch (1) {' + '  default:' + '    function f() { return "second declaration"; }' + '}\
  ');