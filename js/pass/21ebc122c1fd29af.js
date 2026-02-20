function f1() {
  return 1;
}
if (f1() !== 1) {}
function f2() {
  return;
  1;
}
if (f2() !== undefined) {}