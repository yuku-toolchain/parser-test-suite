var after;
(function () {
  eval('if (true) function f() { return "inner declaration"; } else function _f() {}after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();