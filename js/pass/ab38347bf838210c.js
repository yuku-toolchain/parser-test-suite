var obj = Object.create(null);
var iter, iterResult, value;
function* g() {
  value = yield ('hit' in obj);
  value = yield ('miss' in obj);
}
obj.hit = true;
iter = g();
iterResult = iter.next('first');
iterResult = iter.next('second');
iterResult = iter.next('third');