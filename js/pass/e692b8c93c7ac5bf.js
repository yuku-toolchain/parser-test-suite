var init;
(function () {
  eval('init = f;{ function f() { return "inner declaration"; } }function f() {\
      return "outer declaration";\
    }');
})();