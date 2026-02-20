var after;
(function () {
  eval('switch (1) {' + '  case 1:' + '    function f() { return "declaration"; }' + '}\
    after = f;');
})();