var probe;
((_ = null) => {
  var x = 'inside';
  probe = function () {
    return x;
  };
})();
var x = 'outside';