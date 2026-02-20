var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
function getResource() {
  throw new Error();
}