var updated;
(function () {
  eval('{\
      function f() {\
        return "first declaration";\
      }\
    }if (true) function f() { return "second declaration"; } else ;updated = f;');
})();