var after;
(function () {
  eval('if (false) ; else function f() { return "inner declaration"; }after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();