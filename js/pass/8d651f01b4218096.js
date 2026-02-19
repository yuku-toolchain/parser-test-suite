{
  function f() {
    return 'first declaration';
  }
}
eval('switch (1) {' + '  case 1:' + '    function f() { return "second declaration"; }' + '}\
  ');