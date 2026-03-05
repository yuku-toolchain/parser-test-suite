var after;
(function () {
  if (true) function f() {
    return 'function declaration';
  }
  after = f;
  var f = 123;
})();