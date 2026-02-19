var resource = {
  disposed: false,
  [Symbol.dispose]() {}
};
{
  using _ = resource;
}