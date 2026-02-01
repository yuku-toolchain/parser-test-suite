var stack = new DisposableStack();
var disposed = [];
function dispose1() {
  disposed.push(dispose1);
}
function dispose2() {
  disposed.push(dispose2);
}
stack.defer(dispose1);
stack.defer(dispose2);
stack.dispose();