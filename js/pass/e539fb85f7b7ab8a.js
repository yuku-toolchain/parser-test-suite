var initial, postAssignment;
(function () {
  eval('initial = f; f = 5; postAssignment = f; function f() { return 33; }');
})();