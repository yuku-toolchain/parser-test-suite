var updated;
(function () {
  {
    function f() {
      return 'first declaration';
    }
  }
  switch (1) {
    case 1:
      function f() {
        return 'second declaration';
      }
  }
  updated = f;
})();