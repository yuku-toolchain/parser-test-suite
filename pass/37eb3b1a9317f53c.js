var probe;
var C = class {
  set a(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
};
C.prototype.a = null;
var x = 'outside';