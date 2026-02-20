var resource = {
  disposed: false,
  get [Symbol.dispose]() {
    return function () {
      this.disposed = true;
    };
  }
};
{
  using _ = resource;
}