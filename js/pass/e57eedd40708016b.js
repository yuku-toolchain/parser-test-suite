var x;
function __func() {
  x = true;
}
if (__func() !== undefined) {}
if (!x) {}