var init, changed;
(function () {
  init = f;
  f = 123;
  changed = f;
  switch (1) {
    case 1:
      function f() {}
  }
})();