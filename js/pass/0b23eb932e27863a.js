let closed = false;
let closable = {
  __proto__: Iterator.prototype,
  get next() {},
  return() {
    closed = true;
    return {};
  }
};
closed = false;