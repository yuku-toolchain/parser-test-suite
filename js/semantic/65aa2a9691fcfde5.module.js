var o = new Object();
o.x = 1;
var d;
with (o) {
  d = delete o;
}