var init, after;
(function () {
  eval('let f = 123;\
    init = f;switch (1) {' + '  case 1:' + '    function f() {  }' + '}\
    after = f;');
})();