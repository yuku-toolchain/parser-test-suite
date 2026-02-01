var a = 1;
var b = 2;
var c = 3;
function* g() {
  yield a;
  yield b;
  yield c;
}
var iter = g();
var result;
result = iter.next();
result = iter.next();
result = iter.next();
result = iter.next();