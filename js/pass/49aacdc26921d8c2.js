var resource = {
  disposeReadCount: 0,
  get [Symbol.dispose]() {
    this.disposeReadCount++;
    return function () {};
  }
};
{
  using _ = resource;
}