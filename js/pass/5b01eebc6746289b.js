var complete = false;
var sent = {};
var iter, iterResult, received;
var abc, i;
function* g() {
  received = yield /abc/i;
  complete = true;
}
iter = g();
iterResult = iter.next();
iterResult = iter.next(sent);