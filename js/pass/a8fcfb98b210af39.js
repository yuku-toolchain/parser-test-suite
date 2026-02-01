var stack = new DisposableStack();
var resource = {
  disposed: false
};
stack.adopt(resource, r => {
  r.disposed = true;
});
stack.dispose();