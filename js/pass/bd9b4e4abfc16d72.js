var probe;
(function () {
  let x = 'inside';
  probe = function () {
    return x;
  };
})();
var x = 'outside';