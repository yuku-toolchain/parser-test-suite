var typeofInside;
(function () {
  eval('function fun() {}');
  typeofInside = typeof fun;
})();