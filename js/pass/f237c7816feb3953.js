var o = {
  p1: 'p1',
  p2: 'p2',
  p3: 'p3'
};
var keys = [];
for (var key in o) {
  if (key === 'p1') {
    o.p4 = 'p4';
  }
  keys.push(key);
}