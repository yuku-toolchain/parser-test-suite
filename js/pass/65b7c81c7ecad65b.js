var after;
(function () {
  eval('if (false) ; else function f() { return "declaration"; }after = f;');
})();