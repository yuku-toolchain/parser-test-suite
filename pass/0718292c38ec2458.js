var probe;
(function () {
  var x = 'inside';
  probe = function () {
    return x;
  };
})();
var x = 'outside';