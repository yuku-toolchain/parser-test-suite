var resource = {
  disposed: false,
  [Symbol.dispose]() {
    this.disposed = true;
  }
};
{
  using _ = resource;
}