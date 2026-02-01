var after;
(function () {
  eval('switch (1) {' + '  default:' + '    function f() { return "inner declaration"; }' + '}\
    after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();