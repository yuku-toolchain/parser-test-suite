var stack = new DisposableStack();
var disposed = [];
var resource1 = {};
function dispose1(res) {
  disposed.push([res, dispose1]);
}
var resource2 = {};
function dispose2(res) {
  disposed.push([res, dispose2]);
}
stack.adopt(resource1, dispose1);
stack.adopt(resource2, dispose2);
stack.dispose();