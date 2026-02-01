var init;
(function () {
  eval('init = f;\
    \
    {\
      function f() {}\
    }{ function f() {  } }');
})();