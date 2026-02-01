var init, after;
(function () {
  eval('let f = 123;\
    init = f;{ function f() {  } }after = f;');
})();