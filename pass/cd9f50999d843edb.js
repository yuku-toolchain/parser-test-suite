var updated;
(function () {
  eval('{\
      function f() {\
        return "first declaration";\
      }\
    }{ function f() { return "second declaration"; } }updated = f;');
})();