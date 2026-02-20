var probe;
({
  *m(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
}).m().next();
var x = 'outside';