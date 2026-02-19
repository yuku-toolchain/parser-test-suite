var caught;
function f() {
  try {
    eval('super.x;');
  } catch (err) {
    caught = err;
  }
}
f();