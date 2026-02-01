var init, after;
(function () {
  let f = 123;
  init = f;
  switch (1) {
    case 1:
      function f() {}
  }
  after = f;
})();