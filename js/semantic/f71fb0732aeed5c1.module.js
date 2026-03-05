var after;
(function () {
  if (true) function f() {
    return 'function declaration';
  } else function _f() {}
  after = f;
  var f = 123;
})();