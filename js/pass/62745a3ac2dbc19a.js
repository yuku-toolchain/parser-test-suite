var callCnt = 0;
function cb() {
  callCnt++;
}
var i = [].forEach(cb);