var init;
(function () {
  eval('init = f;\
    \
    {\
      function f() {}\
    }switch (1) {' + '  default:' + '    function f() {  }' + '}\
    ');
})();