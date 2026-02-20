var after;
(function () {
  eval('if (true) function f() { return "declaration"; } else ;after = f;');
})();