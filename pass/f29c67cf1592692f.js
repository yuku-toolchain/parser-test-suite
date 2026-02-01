var updated;
(function () {
  eval('{\
      function f() {\
        return "first declaration";\
      }\
    }switch (1) {' + '  default:' + '    function f() { return "second declaration"; }' + '}\
    updated = f;');
})();