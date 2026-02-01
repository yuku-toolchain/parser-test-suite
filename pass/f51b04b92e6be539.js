var probe;
class C {
  set a(_ = null) {
    var x = 'inside';
    probe = function () {
      return x;
    };
  }
}
C.prototype.a = null;
var x = 'outside';