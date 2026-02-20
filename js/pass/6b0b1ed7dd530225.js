var probe;
({
  set a(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
}).a = null;
var x = 'outside';