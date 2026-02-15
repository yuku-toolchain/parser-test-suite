var after;
(function () {
  eval('{ function f() { return "inner declaration"; } }after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();