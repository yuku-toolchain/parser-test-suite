var updated;
(function () {
  eval('{\
      function f() {\
        return "first declaration";\
      }\
    }if (false) ; else function f() { return "second declaration"; }updated = f;');
})();