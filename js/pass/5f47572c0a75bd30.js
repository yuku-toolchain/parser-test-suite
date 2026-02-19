var context;
function* g() {
  context = this;
}
var obj = {
  g: g
};
var iter = obj.g();
iter.next();