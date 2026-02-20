var init;
(function () {
  eval('init = f;\
    \
    {\
      function f() {}\
    }if (false) ; else function f() {  }');
})();