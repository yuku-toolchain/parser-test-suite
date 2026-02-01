var after;
(function () {
  eval('{ function f() { return "function declaration"; } }after = f;\
    \
    var f = 123;');
})();