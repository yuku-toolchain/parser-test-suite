{
  function f() {
    return 'first declaration';
  }
}
(0, eval)('switch (1) {' + '  case 1:' + '    function f() { return "second declaration"; }' + '}\
  ');