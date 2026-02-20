var x;
function __func() {
  x = 1;
  return;
}
if (__func() !== undefined) {}
if (x !== 1) {}