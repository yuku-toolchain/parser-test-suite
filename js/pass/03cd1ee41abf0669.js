var init;
(function () {
  eval('init = f;\
    \
    {\
      function f() {}\
    }switch (1) {' + '  case 1:' + '    function f() {  }' + '}\
    ');
})();