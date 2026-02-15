var initial = null;
var postAssignment;
(function () {
  eval('initial = x; x = 4; postAssignment = x; var x;');
})();