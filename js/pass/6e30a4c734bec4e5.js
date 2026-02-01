var init;
(function () {
  eval('var f = 123;\
    init = f;{ function f() {  } }');
})();