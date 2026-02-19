var after;
(function () {
  eval('switch (1) {' + '  case 1:' + '    function f() { return "inner declaration"; }' + '}\
    after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();