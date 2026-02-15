var probe;
var func = function* g() {
  probe = function () {
    return g;
  };
};
var g = 'outside';
func().next();