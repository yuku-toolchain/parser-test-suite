var initial;
(function () {
  var f = 88;
  eval('initial = f; function f() { return 33; }');
})();