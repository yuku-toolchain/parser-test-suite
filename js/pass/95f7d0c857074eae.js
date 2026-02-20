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
var resource3 = {
  [Symbol.dispose]() {
    disposed.push(this);
  }
};
{
  using _1 = resource1, _2 = resource2;
  using _3 = resource3;
}