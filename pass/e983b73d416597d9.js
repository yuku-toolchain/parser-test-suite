var evaluated = false;
function f() {
  try {
    eval('super[evaluated = true];');
  } catch (_) {}
}
f();