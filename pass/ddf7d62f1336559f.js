var init, after;
(function (f) {
  eval('init = f;switch (1) {' + '  default:' + '    function f() {  }' + '}\
    after = f;');
})(123);