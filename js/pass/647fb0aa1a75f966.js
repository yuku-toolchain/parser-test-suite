var len;
var hits = 0;
function C(length) {
  len = length;
  hits++;
}
Array.of.call(C);
Array.of.call(C, 'a', 'b');
Array.of.call(C, false, null, undefined);