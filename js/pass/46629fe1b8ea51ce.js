var disposed = [];
var resource1 = {
  [Symbol.dispose]() {
    disposed.push(this);
  }
};
var resource2 = {
  [Symbol.dispose]() {
    disposed.push(this);
  }
};
{
  using r1 = resource1;
  using r2 = resource2;
}