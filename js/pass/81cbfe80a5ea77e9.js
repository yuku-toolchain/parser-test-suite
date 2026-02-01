var initial, postDeletion;
(function () {
  eval('initial = f; delete f; postDeletion = function() { f; }; function f() { return 33; }');
})();