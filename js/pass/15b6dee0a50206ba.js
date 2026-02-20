var newTarget = null;
function f() {
  newTarget = new.target;
}
new f();
newTarget = null;
new f();