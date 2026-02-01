var init, after;
(function (f) {
  eval('init = f;switch (1) {' + '  case 1:' + '    function f() {  }' + '}\
    after = f;');
})(123);