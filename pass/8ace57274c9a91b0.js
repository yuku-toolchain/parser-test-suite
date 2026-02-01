let x = 'outside';
var run = true;
var probeTest, probeIncr, probeBody;
for (let x = 'inside'; (probeTest = function () {
  return x;
}) && run; probeIncr = function () {
  return x;
}) (probeBody = function () {
  return x;
}, run = false);