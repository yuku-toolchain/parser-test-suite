var init;
(function () {
  eval('init = f;\
    \
    {\
      function f() {}\
    }if (false) function _f() {} else function f() {  }');
})();