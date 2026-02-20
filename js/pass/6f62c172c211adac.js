var after;
(function () {
  eval('if (true) function f() { return "inner declaration"; } else ;after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();