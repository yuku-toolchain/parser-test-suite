var after;
(function () {
  eval('if (false) function _f() {} else function f() { return "declaration"; }after = f;');
})();