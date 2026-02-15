var after;
(function () {
  eval('if (true) function f() { return "function declaration"; } else ;after = f;\
    \
    var f = 123;');
})();