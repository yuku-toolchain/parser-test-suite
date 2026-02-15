var after;
(function () {
  eval('if (false) function _f() {} else function f() { return "function declaration"; }after = f;\
    \
    var f = 123;');
})();