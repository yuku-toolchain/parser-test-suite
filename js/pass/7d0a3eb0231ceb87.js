{
  function f() {
    return 'first declaration';
  }
}
eval('switch (1) {' + '  default:' + '    function f() { return "second declaration"; }' + '}\
  ');