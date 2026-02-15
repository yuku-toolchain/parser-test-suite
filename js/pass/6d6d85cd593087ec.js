var stack = new DisposableStack();
var disposed = [];
var resource1 = {
  [Symbol.dispose]() {
    disposed.push(resource1);
  }
};
var resource2 = {};
function dispose2(res) {
  disposed.push(res);
}
function dispose3() {
  disposed.push(dispose3);
}
stack.use(resource1);
stack.adopt(resource2, dispose2);
stack.defer(dispose3);
stack.dispose();