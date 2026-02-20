var after;
(function () {
  eval('if (false) function _f() {} else function f() { return "inner declaration"; }after = f;\
    \
    function f() {\
      return "outer declaration";\
    }');
})();