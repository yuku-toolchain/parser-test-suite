var after;
(function () {
  eval('if (false) ; else function f() { return "function declaration"; }after = f;\
    \
    var f = 123;');
})();